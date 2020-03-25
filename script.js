function realtimeClock(){
	var rtClock = new Date ();

	var hours24 = rtClock.getHours();
	var minutes = rtClock.getMinutes();
	var seconds = rtClock.getSeconds();

	//toevoegen van pm en am
	var amPM = (hours < 12) ? "AM" : "PM";

	//zet de urencomponent om in 12 urenformaat
	var hours = (hours24 > 12) ? hours24 - 12 : hours24;

	//
	hours = ("0" + hours).slice(-2);
	minutes = ("0" + minutes).slice(-2);
	seconds = ("0" + seconds).slice(-2);

	//laat de klok zien
	document.getElementById('clock').innerHTML =
		hours + " : " + minutes + " : " + seconds + " " + amPM;
	var t = setTimeout(realtimeClock, 500);

	if (hours24 >= 19 || hours24<7) {
		document.getElementsByTagName('body')[0].style.backgroundColor = '#141824';
	}
	else{
		document.getElementsByTagName('body')[0].style.backgroundColor = '#FFFFFF';
	}
}

