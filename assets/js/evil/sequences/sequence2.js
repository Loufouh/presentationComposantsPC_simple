"use strict";

let front1SpritesheetImg;
let front1Animation;

let drawMessageInterval;

let messageIndex = 0;
let charIndex = 0;

let alpha = 1;

let messages = [
	"Fantastique...",
	"Je comprends pas pourquoi tu as mis autant de temps pour résoudre une énigme aussi triviale...",
	"T'as de la chance que cet idiot n'ai pas pris le temps de développer la suite du jeu, sinon t'y aurais passé 5 ans...",
	"Ciao."
];

let isShowingPassIcon = false;

let isChangementSequencePassed = false;

function startSequence2() {
	body.removeEventListener("click", startSequence2);
	messageBox.classList.remove("hidden");

	front1SpritesheetImg = new Image();
	
	front1SpritesheetImg.onload = function () {
		front1Animation = new Animation(new SpriteSheet(front1SpritesheetImg, new Vector(288, 256), 5),
						new Vector((canvas.width - 288)/2, (canvas.height - 256)/2), 
						[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
			 			[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
	}
	front1SpritesheetImg.src = "assets/img/sprites/front1.png";
	setTimeout(() => {
		drawMessageInterval = setInterval(drawNextChar, 30)
	}, 2000);
	emevilThemeAudio.play();

	currentSequence = Sequence.SEQUENCE2;
}

function showSequence2() {
	if(front1Animation !== undefined)
		front1Animation.draw();
	if(isShowingPassIcon)
		drawImage(passIcon, canvas.width - (passIcon.width + 10), canvas.height - (passIcon.height + 10));
}

function nextMessages() {
	body.removeEventListener("click", nextMessages);
	clearInterval(drawMessageInterval);
	isShowingPassIcon = false;
	messageBox.innerHTML = "";

	if(messageIndex === messages.length - 2) {
		setCookie("isEmevilSpeechOver", "true", new Time(20, DurationType.MINUTE));
		setTimeout(()=> window.location.href = "index.html", 1000);
	}

	messageIndex++;
	charIndex = 0;
	drawMessageInterval = setInterval(drawNextChar, 30);
	
}

function drawNextChar() {
	if(charIndex === messages[messageIndex].length) {
		clearInterval(drawMessageInterval);
		isShowingPassIcon = true;
		body.addEventListener("click", nextMessages);
		return;
	}
	messageBox.insertAdjacentText("beforeend", messages[messageIndex][charIndex]);
	charIndex++;
}

