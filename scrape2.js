"https://www.commonsensemedia.org/book-reviews?sort=field_stars_rating&order=desc&page=0";



let express = require('express');
let app = express();
var isRoot = (process.getuid && (process.getuid() === 0));
var port;
if (isRoot) {
	port = 80;
} else {
	port = process.env.PORT;
}
var server = app.listen(port, () => {
	console.log("Started webserver");
});


app.set('view engine', 'ejs');

app.get('/', (req, res) => {

	var stats = formatBytes(fs.statSync(__dirname + "/books.csv").size);

  res.render('index', {
  	status: scraperStatus,
  	bookCount: books.length,
  	csvSize: stats,
  	jsonSize: stats
  });
});

var scraperStatus = "stopped";

app.post('/start', (req, res) => {
	startScraper();
	console.log('Started scraper');
	res.send(true);
});
app.post('/pause', (req, res) => {
	pauseScraper();
	console.log('Paused scraper');
	res.send(true);
});
app.post('/stop', (req, res) => {
	stopScraper();
	console.log('Stopped scraper');
	res.send(true);
});
app.get('/styles.css', (req, res) => {
	res.sendFile(__dirname + '/control/styles.css');
});
app.get('/scraperStatus.svg', (req, res) => {
	res.sendFile(__dirname + '/control/' + desiredStatus + '.svg');
});
app.get('/script.js', (req, res) => {
	res.sendFile(__dirname + '/control/script.js');
});









function formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}




const needle = require('needle'); 
const cheerio = require('cheerio')

var tempbooks = [];
var books = [];

var minDelay = 1000;
var maxDelay = 1000;




function chopOffTail(orig,fromlast) {
	return orig.toString().substring(0,orig.toString().length-fromlast); 
}
var startingURL = 'https://www.commonsensemedia.org/book-reviews?sort=field_stars_rating&order=desc&page=';
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var verbose = false;

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

var desiredStatus = "running";

function pauseScraper() {
	if (scraperStatus == "stopped" || scraperStatus == "paused") {
		return;
	}
	desiredStatus = "paused";
}

function startScraper() {
	if (scraperStatus == "stopped") {
		onPage = 0;
	}
	desiredStatus = "running";
	scrape();
}

function stopScraper() {
	desiredStatus = "stopped";
	fs.writeFile('books.csv', "", (err) => {
	if (err) throw err;
	console.log('CSV erased');
	});
}

var onPage = 0;
var maxPage = 5;

async function scrapePage(currURL) {
  return new Promise(async (resolve) => {

		if (verbose) {
			console.log("GET "+currURL);
		}
		var res = await needle('get', currURL);
		if (verbose) {
			console.log("GOT "+currURL);
		}
		if (res.body.toLowerCase().includes('activism')) { // nah fam
			resolve();
			return;
		}	
		let cheerThis = cheerio.load(res.body);
		let currBook = {};
		currBook.title = cheerThis('.pane-node-title.csm_book').text();
		let ageNonParsed = cheerThis('.csm-green-age').text().split(' ')[1]
		ageNonParsed = ageNonParsed.substring(0,ageNonParsed.length-4);
		currBook.ageRating = Number(ageNonParsed);		
		currBook.stars = Number(cheerThis('.ratings-small.star.field_stars_rating.csm_review')[0].attribs['class'].match(/[0-5]/)[0]);
		currBook.desc = cheerThis('.panel-pane.pane-entity-field.pane-node-field-one-liner').text();
		currBook.author = cheerThis('.product-subtitle.csm_book>.item-list>ul>li.first').text();
		currBook.authorFirstName = currBook.author.split(' ')[0];
		currBook.authorSurname = currBook.author.split(' ')[1];
		currBook.genre = cheerThis('.product-subtitle.csm_book>.item-list>ul>li:nth-child(2)').text();
		currBook.releaseDate = cheerThis('.product-subtitle.csm_book>.item-list>ul>li.last').text();
	
		if (cheerThis('.user-review-statistics.adult>.stat-wrapper.age').text()) {
			currBook.parentAgeRating = chopOffTail(cheerThis('.user-review-statistics.adult>.stat-wrapper.age').text().split(' ')[1],1); // age rating, according to parents
			currBook.parentStars = Number(cheerThis('.user-review-statistics.adult>.ratings-small.star.field-stars-rating.csm-review')[0].attribs['class'].match(/[0-5]/)[0]); // stars, according to parents		

		} else {
			currBook.parentAgeRating = null;
			currBook.parentStars = null;
		}
		
		if (cheerThis('.user-review-statistics.child>.stat-wrapper.age').text()) {
			currBook.kidsAgeRating = chopOffTail(cheerThis('.user-review-statistics.child>.stat-wrapper.age').text().split(' ')[1],1);// age rating, according to kids
			currBook.kidsStars = Number(cheerThis('.user-review-statistics.child>.ratings-small.star.field-stars-rating.csm-review')[0].attribs['class'].match(/[0-5]/)[0]);// stars, according to kids
		} else {
			currBook.kidsAgeRating = null;
			currBook.kidsStars = null;
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
				currBook[fields[m][1]+'ValNum'] = Number(cheerThis('#content-grid-item-'+fields[m][0]+' > .entity > .content > .field-name-field-content-grid-rating > .field-items > .field-item.even > div')[0].attribs['class'].match(/[0-5]/)[0]);
				currBook[fields[m][1]+'Desc'] = cheerThis('#content-grid-item-'+fields[m][0]+' > .entity > .content > .field-name-field-content-grid-rating-text > .field-items > .field-item.even > p').text()
			} else {
				currBook[fields[m][1]+'ValNum'] = -1;
				currBook[fields[m][1]+'Desc'] = null;
			}		
		}

		for (let b in currBook) {
			if (currBook[b] && currBook[b].toString() === currBook[b]) {
				currBook[b] = currBook[b].trim();
			}
			if (currBook[b] && Number(currBook[b]) == currBook[b]) {
				currBook[b] = Number(currBook[b]);
			}
		}
		books.push(currBook);
		tempbooks.push(currBook);
		console.log("Scraped "+currBook.title);
		resolve();
	});
}


async function scrape() {
	if (onPage > maxPage) {
		scraperStatus = "stopped";
		return;
	}
	if (verbose) {
		console.log("GET "+startingURL+onPage);
	}
	var response = await needle('get', startingURL+onPage);
	if (verbose) {
		console.log("GOT "+startingURL+onPage);
	}
	if (!response.statusCode == 200) {
		throw response.statusCode;
		return; 
	}
		
	const cheer = cheerio.load(response.body);
	var x = cheer('.csm-button');
	
	for (let i = 0; i < x.length; i++) {
		await sleep(Math.floor(Math.random()*(maxDelay-minDelay))+minDelay);
		let currURL = 'https://www.commonsensemedia.org' + x[i].attribs['href'];
		if (desiredStatus == "stopped") {
			scraperStatus = "stopped";
			return;
		}
		if (desiredStatus == "paused") {
			scraperStatus = "paused";
			return;
		}
		await scrapePage(currURL);
	}
	writeToCSV(tempbooks);
	tempbooks = [];
	if (desiredStatus == "stopped") {
		scraperStatus = "stopped";
		return;
	}
	if (desiredStatus == "paused") {
		scraperStatus = "paused";
		return;
	}
	setTimeout(scrape,(Math.floor(Math.random()*(maxDelay-minDelay))+minDelay));
};

const fs = require('fs');
async function prepCSV() {
	var err = await fs.writeFile('books.csv', "Title, Age Rating, Stars, Description, Author, Author first name, Author Surname, Genre, Release Date, Parent Age Rating, Parent Star Rating, Kids Age Rating, Kids Star Rating, Educational Value Score, Educational Value Description, Positive Message Value, Positive Message Description, Role Model Value, Role Model Description, Violence Value, Violence Description, Sex Value, Sex Description ( ͡° ͜ʖ ͡°), Language Value, Language Description ( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°), Consumerism Value, Consumerism Description, Drugs/Alchohol Value, Drugs/Alchohol Description\n");
	if (err) throw err;
	console.log('CSV prepped!');
	scraperStatus = "paused";
	
}

//prepCSV().then(scrape);


function writeToCSV(arr) {
	let tempString = "";
	for (let i = 0; i < arr.length; i++) {
		for (let key in arr[i]) {
			if (arr[i][key] && arr[i][key].toString().includes(',')) {
				tempString+='"'+arr[i][key]+'",';
			} else {
				tempString+=arr[i][key]+',';
			}
		}
		tempString += '\n';
	}

	fs.appendFile('books.csv', tempString, (err) => {
    if (err) throw err;
    console.log('CSV saved!');
});
	
}












