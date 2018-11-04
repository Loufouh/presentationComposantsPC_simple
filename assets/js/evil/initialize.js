"use strict";

let title;
let h1;
let body; let canvas; let messageBox; 
let controllingLoopTimeout;

window.onload = init;

function init() {
	let title = document.querySelector("title");
	let h1 = document.querySelector("h1");
	// pick random title
	title.innerHTML = "";
	h1.innerHTML = "";

	title.insertAdjacentText("beforeend", new Array(10).fill().map(()=>randomChar()).join(""));
	h1.insertAdjacentText("beforeend", new Array(10).fill().map(()=>randomChar()).join(""));

	body = document.querySelector("body");
	let password = prompt("4d 6f 74 20 64 65 20 70 61 73 73 65").toLowerCase();

	if(password !== "0d" && password !== "d") {
		setWrongPasswordConfig();
	SEQUENCE1: 1
		return;
	}

	initCanvas();
	initMessageBox();
	start();
}

function setWrongPasswordConfig() {
	// indicate password's bad
	alert("4c 65 20 6d 6f 74 20 64 65 20 70 61 73 73 65 20 73 61 69 73 69 20 65 73 74 20 69 6e 63 6f 72 72 65 63 74 20 21");
	// insert "forgotten password" button
	body.insertAdjacentHTML("beforeend", "<button>4d 6f 74 20 64 65 20 70 61 73 73 65 20 6f 75 62 6c 69 c3 a9 20 3f</button>");
	// display the hint if button's clicked
	document.querySelector("button").addEventListener("click", () => alert("49 6e 64 69 63 65 20 3a 20 4c 65 20 6d 6f 74 20 64 65 20 70 61 73 73 65 20 65 73 74 20 63 61 63 68 c3 a9 20 64 61 6e 73 20 6c 61 20 70 61 67 65 20 20 22 50 72 c3 a9 73 65 6e 74 61 74 69 6f 6e 22"));
}

function initCanvas() {
	body.insertAdjacentHTML("beforeend", "<canvas width='700' height='700'>Le navigateur n'a pas chargé correctement la page</canvas>");	
	canvas = document.querySelector("canvas");

	setTargetContext(canvas.getContext("2d"));
	
	// Calculate canvas dimensions
	if(window.innerHeight < window.innerWidth) {
		canvas.height = Math.floor(4*window.innerHeight/8);
		canvas.width = canvas.height*1.618;
	} else {
		canvas.width = Math.floor(7*window.innerWidth/8);
		canvas.height = canvas.width/1.618;
	}
}

function initMessageBox() {
	body.insertAdjacentHTML("beforeend", "<div id='messageBox' class='hidden'></div>");
	messageBox = document.getElementById("messageBox");
}

function start() {
	setup();
	startLooping();
}

function controllingLoop() {
	let deltaTime = 0;
	let startTime;
	let endTime;
	
	startTime = new Date();
	
	loop();

	endTime = new Date();
	deltaTime = endTime - startTime;
	numberOfFrames++;

	controllingLoopTimeout = setTimeout(controllingLoop, 1000/wantedFPS - deltaTime/1000);
}

function startLooping() {
	clearTimeout(controllingLoopTimeout);
	controllingLoop();
}

function stopLooping() {
	clearTimeout(controllingLoopTimeout);
}
