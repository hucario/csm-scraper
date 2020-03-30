function sendPost(recipient,data,callback) {
					try {
						if (recipient==undefined) {throw "You need a recipient for sendPost!";}
						var request = new XMLHttpRequest;
						request.open("POST",recipient);
						if (callback!=undefined) {
						request.addEventListener("load",callback);
						}
						request.addEventListener('error', function(er) {
							throw er;
						});
						request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
						request.send(data);
					} catch(data) {
						console.error('$h.sendPost() failed! Data thrown: '+data);
					}
				}
				
document.getElementById('start').addEventListener('click', () => {
	sendPost('/start', '');
	alert("Started scraper");
	window.location = "";
});

document.getElementById('pause').addEventListener('click', () => {
	sendPost('/pause', '');
	alert("Paused scraper");
	window.location = "";
});

document.getElementById('stop').addEventListener('click', () => {
	sendPost('/stop', '');
	alert("Stopped scraper");
	window.location = "";
});
