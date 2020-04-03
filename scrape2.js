/*
 *	CommonSenseMedia scraper
 *	By H
 *
 */

/* Config */

var minDelay = 1500;
var maxDelay = 4000;
var verbose = false;

/* Requires */
const express = require('express');
const needle = require('needle'); 
const cheerio = require('cheerio');
const socketio = require('socket.io');

/* Set up express & socketio */
const app = express();
var isRoot = (process.getuid && (process.getuid() === 0));
var port;
if (isRoot) {
	port = 80;
} else {
	port = process.env.PORT || 8000;
}
const server = app.listen(port, onStartup);
function onStartup() {
	log("Started webserver on port "+port);
}
const io = socketio.listen(server);

app.set('view engine', 'ejs');

io.on('connect', (socket) => {
	socket.on('start', startScraper);
	socket.on('stop', stopScraper);
	socket.on('pause', pauseScraper);
	socket.on('setcurrentpage', (b) => {
		log('Setting current page to '+b);
		onPage = b;
		currBookOnPage = 0;
		manuallySet = true;
	});
});

/* Routing */
app.post('/update', (req, res) => {
	let afta = req.body.after; 
	let compareLink = req.body.compare
});

app.get('/', (req, res) => {

	var stats;
	var statsJSON;
	try {
		if (fs.existsSync(__dirname + '/books.csv')) {
			stats = formatBytes(fs.statSync(__dirname + "/books.csv").size);
		} else {
			stats = "0 Bytes";
		}	
		if (fs.existsSync(__dirname + '/books.json')) {
			statsJSON = formatBytes(fs.statSync(__dirname + "/books.json").size);
		} else {
			statsJSON = "0 Bytes";
		}
	} catch(e){
		log('Error getting file size: '+e);
		stats = "Error";
		statsJSON = "Error";
	}
	var startButtonDisabled = "";
	var pauseButtonDisabled = "";
	var stopButtonDisabled = "";
	switch(scraperStatus) {
		case 'paused':
		case 'ready':
			startButtonDisabled = "";
			pauseButtonDisabled = "disabled";
			stopButtonDisabled = "";
			break;
		case 'running':
			startButtonDisabled = "disabled";
			pauseButtonDisabled = "";
			stopButtonDisabled = "";
			break;
		case 'stopped':
			startButtonDisabled = "";
			pauseButtonDisabled = "disabled";
			stopButtonDisabled = "disabled";
			break;
	}
	try {
		res.render('index', {
			status: scraperStatus,
			bookCount: books.length + (' ('+(20 - currBookOnPage)+' left until next save)'),
			csvSize: stats,
			jsonSize: statsJSON,
			logs: conlogs.join(''),
			startButtonDisabled: startButtonDisabled,
			pauseButtonDisabled: pauseButtonDisabled,
			stopButtonDisabled: stopButtonDisabled,
			onPage: onPage,
			currBookOnPage: currBookOnPage
		});
	} catch(e) {
		log('Error rendering index: '+e);
	}
});

app.get('/styles.css', (req, res) => {
	try {
		res.sendFile(__dirname + '/control/styles.css');
	} catch (e) {
		log('Error sending stylesheet: '+e);
	}
});
app.get('/scraperStatus.svg', (req, res) => {
	try {
		res.set('Cache-control','max-age=0, must-revalidate');
		res.sendFile(__dirname + '/control/' + scraperStatus + '.svg');
	} catch(e) {
		log('Error sending scraperStatus.svg: '+e);
	}
});
app.get('/script.js', (req, res) => {
	res.sendFile(__dirname + '/control/script.js');
	// not much point in putting a try/catch here, as it wouldn't be read by the client anyways
});

app.get('/books.csv', (req, res) => {
	try {
		res.sendFile(__dirname + '/books.csv');
	} catch(e) {
		log('Error sending books.csv: '+e);
	}
});

app.get('/books.json', (req, res) => {
	try {
		res.sendFile(__dirname + '/books.json');
	} catch(e) {
		log('Error sending books.json: '+e);
	}
});
/* Variables */

var startingURL = 'https://www.commonsensemedia.org/book-reviews?sort=field_stars_rating&order=desc&page=';

var scraperStatus = "stopped";
var desiredStatus = "stopped";

var tempbooks = [];
var books = [];
var manuallySet = false;


var onPage = 0;
var maxPage = 291;
var currBookOnPage = 0;

var conlogs = [];

/* Functions */

function log() {
	var x = "";
	for (let i = 0; i < arguments.length; i++) {
		x += arguments[i];
	}
	console.log(x);
	conlogs.push(x+'<br>');
	io.emit('log', x+'<br>');
}

function formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}


function chopOffTail(orig,fromlast) {
	if (!orig || !orig.toString) {
		return false;
	}
	return orig.toString().substring(0,orig.toString().length-fromlast); 
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function pauseScraper() {
	if (scraperStatus == "stopped" || scraperStatus == "paused") {
		return;
	}
	desiredStatus = "paused";
	scrape();
}

function startScraper() {
	if (scraperStatus == "stopped") {
		if (!manuallySet) {
			onPage = 0;
		}
		prepCSV();
		books = [];
		tempbooks = [];
		currBookOnPage = 0;
	}
	desiredStatus = "running";
	scrape();
}

function stopScraper() {
	desiredStatus = "stopped";
	scrape();
}

function writeToCSV(arr) {
	let tempString = "";
	try {
		for (let i = 0; i < arr.length; i++) {
			for (let key in arr[i]) {
				tempString+='"';
				for (let b = 0; b < (""+arr[i][key]).length; b++) {
					if ((""+arr[i][key]).split('')[b] == '"') {
						tempString += '""';
					} else {
						tempString += (""+arr[i][key]).split('')[b];
					}
				}
				tempString+='",';
			}
			tempString += '\n';
		}
	} catch(e) {
		log('Error rendering books.csv: '+e);
		return;
	}

	fs.appendFile('books.csv', tempString, (err) => {
		if (err) {
			log('Error writing to books.csv: '+err);
			return;
		}
		log('Books CSV saved');
	});
	fs.writeFile('books.json', JSON.stringify(books), (err) => {
		if (err) {
			log('Error writing to books.json: '+err);
			return;
		}
		log('Books JSON saved');
	});
}

async function scrapePage(currURL) {
  return new Promise(async (resolve) => {

		if (verbose) {
			console.log("GET "+currURL);
		}
		var res;
	  	try {
			res = await needle('get', currURL);
		} catch(e) {
			log('Error GETting "'+currURLL+'": '+e);
			pauseScraper();
			return;
		}
		if (verbose) {
			console.log("GOT "+currURL);
		}
		let cheerThis
	  	try {
			cheerThis = cheerio.load(res.body);
		} catch (e) {
			log('Error parsing HTML: '+e);
			pauseScraper();
			return;
		}
		let currBook = {};
	  	try {
			currBook.title = cheerThis('.pane-node-title.csm_book').text();
			if (res.body.toLowerCase().includes('activism')) { // nah fam
				log('Activism detected in '+currBook.title);
				currBook.activism = true;
			} else {
				currBook.activism = false;
			}
			let ageNonParsed = cheerThis('.csm-green-age').text().split(' ')[1];
			ageNonParsed = (""+ageNonParsed).substring(0,ageNonParsed.length-4);
			currBook.ageRating = Number(ageNonParsed) || -1;		
			currBook.stars = Number(cheerThis('.ratings-small.star.field_stars_rating.csm_review')[0].attribs['class'].match(/[0-5]/)[0]) || -1;
			currBook.desc = cheerThis('.panel-pane.pane-entity-field.pane-node-field-one-liner').text() || "null";
			currBook.author = cheerThis('.product-subtitle.csm_book>.item-list>ul>li.first').text() || "null";
			currBook.authorFirstName = currBook.author.split(' ')[0] || "null";
			currBook.authorSurname = currBook.author.split(' ')[1] || "null";
			currBook.genre = cheerThis('.product-subtitle.csm_book>.item-list>ul>li:nth-child(2)').text() || "null";
			currBook.releaseDate = cheerThis('.product-subtitle.csm_book>.item-list>ul>li.last').text() || "null";
		
			if (cheerThis('.user-review-statistics.adult>.stat-wrapper.age').text()) {
				currBook.parentAgeRating = chopOffTail(cheerThis('.user-review-statistics.adult>.stat-wrapper.age').text().split(' ')[1],1); // age rating, according to parents
				currBook.parentStars = Number(cheerThis('.user-review-statistics.adult>.ratings-small.star.field-stars-rating.csm-review')[0].attribs['class'].match(/[0-5]/)[0]); // stars, according to parents		
	
			} else {
				currBook.parentAgeRating = "null";
				currBook.parentStars = "null";
			}
			
			if (cheerThis('.user-review-statistics.child>.stat-wrapper.age').text()) {
				currBook.kidsAgeRating = chopOffTail(cheerThis('.user-review-statistics.child>.stat-wrapper.age').text().split(' ')[1],1);// age rating, according to kids
				currBook.kidsStars = Number(cheerThis('.user-review-statistics.child>.ratings-small.star.field-stars-rating.csm-review')[0].attribs['class'].match(/[0-5]/)[0]);// stars, according to kids
			} else {
				currBook.kidsAgeRating = "null";
				currBook.kidsStars = "null";
			}
	
			let fields = [
				[
					'educational',
					'eduVal'
				],
				[
					'message',
					'posMsg'
				],
				[
					'role_model',
					'roleModel',
				],
				[
					'violence',
					'violence'
				],
				[
					'sex',
					'sex'
				],
				[
					'language',
					'lang'
				],
				[
					'consumerism',
					'cons'
				],
				[
					'drugs',
					'drugs'
				]
			]
			for (let m = 0; m < fields.length; m++) {
				if (cheerThis('#content-grid-item-'+fields[m][0])[0]) {
					currBook[fields[m][1]+'ValNum'] = Number(cheerThis('#content-grid-item-'+fields[m][0]+' > .entity > .content > .field-name-field-content-grid-rating > .field-items > .field-item.even > div')[0].attribs['class'].match(/[0-5]/)[0]) || -1;
					currBook[fields[m][1]+'Desc'] = cheerThis('#content-grid-item-'+fields[m][0]+' > .entity > .content > .field-name-field-content-grid-rating-text > .field-items > .field-item.even > p').text() || "null";
				} else {
					currBook[fields[m][1]+'ValNum'] = -1;
					currBook[fields[m][1]+'Desc'] = null;
				}		
			}
		} catch(e) {
			log('Error parsing parsed HTML: '+e);
			pauseScraper();
			return;
		}
		try {
			for (let b in currBook) {
				if ((""+currBook[b]) === currBook[b]) {
					currBook[b] = (""+currBook[b]).trim();
				}
				if (Number(currBook[b]) == currBook[b]) {
					currBook[b] = Number(currBook[b]);
				}
			}
		} catch(e) {
			log('Error type-converting parsed data: '+e);
			pauseScraper();
			return;
		}
		if (desiredStatus == "stopped") {
			scraperIs('stopped');
			books = [];
			return;
		}
		if (desiredStatus == "paused") {
			scraperIs('paused');
			return;
		}
		
		books.push(currBook);
		tempbooks.push(currBook);
		log("Scraped "+currBook.title);	
		resolve();
	});
}

function scraperIs(set) {
	if (scraperStatus != set) {
		scraperStatus = set;
		log("Scraper is now "+set+".");
		io.emit('newStatus',scraperStatus);
	}
}

async function scrape() {
	if (onPage > maxPage) {
		scraperIs("stopped");
		log("Hit max page limit - "+onPage+' >= '+maxPage);
		return;
	}
	if (desiredStatus == "running") {
		scraperIs("running");
	}
	if (desiredStatus == "stopped") {
		scraperIs("stopped");
		return;
	}
	if (desiredStatus == "paused") {
		scraperIs("paused");
		return;
	}
	
	if (verbose) {
		console.log("GET "+startingURL+onPage);
	}
	var response;
	try {
		response = await needle('get', startingURL+onPage);
	} catch(e) {
		log('Error GETting "'+startingURL+onPage+'": '+e);
		pauseScraper();
		return;
	}
	
	if (verbose) {
		console.log("GOT "+startingURL+onPage);
	}
	if (!response.statusCode == 200) {
		log('"'+startingURL+onPage+'": HTTP Error '+response.statusCode);
		pauseScraper();
		return; 
	}
	var cheer;
	try {
		cheer = cheerio.load(response.body);
	} catch(e) {
		log('Error parsing html for page '+onPage+': '+e);
		pauseScraper();
		return;
	}
	let x = cheer('.csm-button');
	var stats;
	var statsJSON;
	for (; currBookOnPage < x.length; currBookOnPage++) {
		if (!x[currBookOnPage].attribs['href']) {
			log('Hold up! Button #'+currBookOnPage+' on page '+onPage+' is missing a href attribute!');
			pauseScraper();
			return;
		}
		await sleep(Math.floor(Math.random()*(maxDelay-minDelay))+minDelay); //please don't ban me :(
		if (desiredStatus == "stopped") {
			scraperIs('stopped');
			books = [];
			return;
		}
		if (desiredStatus == "paused") {
			scraperIs('paused');
			return;
		}
		try {
			await scrapePage('https://www.commonsensemedia.org' + x[currBookOnPage].attribs['href']);
		} catch(e) {
			// there's absolutely no reason this should happen but worst comes worst,
			log('Uncaught exception scraping '+x[currBookOnPage].attribs['href']+': '+e);
			pauseScraper();
			return;
		}
		if (currBookOnPage != x.length-1) { 
			io.emit('bookScraped', books.length + (' ('+(20 - currBookOnPage)+' left until next save)'), stats, statsJSON);
			io.emit('getCurrentBookOnPage', currBookOnPage);
		}
	}
	onPage++;
	currBookOnPage = 0;
	io.emit('getCurrentBookOnPage', currBookOnPage);
	io.emit('currPage', onPage);
	if (desiredStatus == "stopped") {
		scraperIs('stopped');
		return;
	}
	if (desiredStatus == "paused") {
		scraperIs('paused');
		return;
	}
	try {
		stats = formatBytes(fs.statSync(__dirname + "/books.csv").size);
		statsJSON = formatBytes(fs.statSync(__dirname + "/books.json").size);
	} catch(e) {
		log('Error getting file sizes: '+e);
		pauseScraper();
		return;
	}
	writeToCSV(tempbooks);
	tempbooks = [];
	io.emit('bookScraped', books.length + (' ('+(20 - currBookOnPage)+' left until next save)'), stats, statsJSON);
	if (scraperStatus == "running" || desiredStatus == "running") {
		setTimeout(scrape,(Math.floor(Math.random()*(maxDelay-minDelay))+minDelay));
	}
};

const fs = require('fs');
async function prepCSV() {
	try {
		fs.writeFileSync('books.json', '');
		fs.writeFileSync('books.csv', "Title, Activist?, Age Rating, Stars, Description, Author, Author first name, Author Surname, Genre, Release Date, Parent Age Rating, Parent Star Rating, Kids Age Rating, Kids Star Rating, Educational Value Score, Educational Value Description, Positive Message Value, Positive Message Description, Role Model Value, Role Model Description, Violence Value, Violence Description, Sex Value, Sex Description ( ͡° ͜ʖ ͡°), Language Value, Language Description ( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°), Consumerism Value, Consumerism Description, Drugs/Alchohol Value, Drugs/Alchohol Description\n");
	} catch(e) {
		log('Error prepping books.json and/or books.csv: '+e);
		return;
	}
	log('CSV & JSON reset.');
}

/* Startup */

for (let e = 2; e < process.argv.length; e++) {
	if (process.argv[e] == "--verbose") {
		verbose = true;
		break;
	}
}

if (verbose) {
	console.log('Verbose mode ON');
} else {
	console.log('Verbose mode OFF');
}












