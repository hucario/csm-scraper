
document.getElementById('start').addEventListener('click', () => {
	socket.emit('start');
	document.getElementById('status').innerText = "starting...";
});

document.getElementById('pause').addEventListener('click', () => {
	socket.emit('pause');
	document.getElementById('status').innerText = "pausing...";
});

document.getElementById('stop').addEventListener('click', () => {
	socket.emit('stop');
	document.getElementById('status').innerText = "stopping...";
});

var socket = io();
var startButton = document.getElementById('start');
var pauseButton = document.getElementById('pause');
var stopButton = document.getElementById('stop');
		
socket.on('newStatus', (newStatus) => {
	document.querySelector('.scraperStatus').src = "scraperstatus.svg?x=" + new Date().getTime() + Math.floor(Math.random()*100);
	document.getElementById('status').innerText = newStatus;
	switch(newStatus) {
		case 'paused':
		case 'ready':
			startButton.disabled = false;
			pauseButton.disabled = true;
			stopButton.disabled = false;

			break;
		case 'running':
			startButton.disabled = true;
			pauseButton.disabled = false;
			stopButton.disabled = false;
			break;
		case 'stopped':
			startButton.disabled = false;
			pauseButton.disabled = true;
			stopButton.disabled = true;
			break;
	}
});

socket.on('getCurrentBookOnPage', (e) => {
	document.getElementById('currBookOnPage').innerText = Number(e)+1;
});
socket.on('currPage', (e) => {
	console.log(e);
	document.getElementById('currBook').value = e;
});
document.getElementById('do').addEventListener('click', () => {
	socket.emit('setcurrentpage', document.getElementById('currBook').value);
});


socket.on('bookScraped', function(bookCount, sizeCSV, sizeJSON) {
	document.getElementById('bookCount').innerText = "Books scraped: "+bookCount;
	document.getElementById('csvSize').innerText = 	"CSV size: "+sizeCSV;
	document.getElementById('jsonSize').innerText = "JSON size: "+sizeJSON;
});

socket.on('disconnect', () => {
	document.querySelector('.logs').innerHTML += 'Disconnected from scraper, reconnecting...<br>';
});
var once = true;
socket.on('connect', () => {
	if (!once) {
		document.querySelector('.logs').innerHTML += 'Connected to scraper<br>';
	}
	once = false;
});

socket.on('update', (a) => {
	document.querySelector('.logs').innerHTML += "GitHub commit ";
	document.querySelector('.logs').innerText += a;
	document.querySelector('.logs').innerHTML += " has been pushed, scraper will restart shortly...<br>";
});

socket.on('log', (a) => {
	document.querySelector('.logs').innerHTML += a;
	document.querySelector('.logs').scrollTop = document.querySelector('.logs').scrollHeight;
});

async function doTheFetchThing() {
	await fetch('/socket.io/socket.io.js');
	setTimeout(doTheFetchThing, (10*60*1000));
}
doTheFetchThing();
