//your JS code here. If required.
	function displayTime() {
			let date = new Date();
			let time = date.toLocaleTimeString();
			let formattedDate = date.toLocaleDateString();
			document.getElementById('timer').innerHTML = `${time}<br>${formattedDate}`;
		}
		setInterval(displayTime, 1000); // Update time every second
