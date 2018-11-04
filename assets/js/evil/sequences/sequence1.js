"use strict";

let soundAlertIconIsDisplayed = false;

let soundAlertIcon;
let passIcon;

let iterationCount = 0;

function startSequence1() {
	initIcons();
	body.classList.add("clickable");
	body.addEventListener("click", startSequence2);
	currentSequence = Sequence.SEQUENCE1;
}

function showSequence1() {
	drawImage(passIcon, canvas.width - (passIcon.width + 20), canvas.height - (passIcon.height + 20));

	if(soundAlertIconIsDisplayed)
		drawImage(soundAlertIcon, (canvas.width - soundAlertIcon.width)/2, (canvas.height - soundAlertIcon.height)/2);
	
	// switch boolean if time's right
	if(iterationCount%20 === 0) {
		soundAlertIconIsDisplayed = 1 - soundAlertIconIsDisplayed;
		iterationCount = 0;
	}
	iterationCount++;
}

function initIcons() {
	soundAlertIcon = new Image();
	passIcon = new Image();

	soundAlertIcon.src = "assets/img/icons/volume_up.png";
	passIcon.src = "assets/img/icons/pass_arrow.png";
}
