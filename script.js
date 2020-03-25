function realtimeClock(){
	var rtClock = new Date ();

	var hours = rtClock.getHours();
	var minutes = rtClock.getMinutes();
	var seconds = rtClock.getSeconds();

	//toevoegen van pm en am
	var amPM = (hours < 12) ? "AM" : "PM";

	//convert the hours component to 12 hours format
	hours = (hours > 12) ? hours - 12 : hours;

	//
	hours = ("0" + hours).slice(-2);
	minutes = ("0" + minutes).slice(-2);
	seconds = ("0" + seconds).slice(-2);

	//laat de klok zien
	document.getElementById('clock').innerHTML =
		hours + " : " + minutes + " : " + seconds + " " + amPM;
	var t = setTimeout(realtimeClock, 500);
}
