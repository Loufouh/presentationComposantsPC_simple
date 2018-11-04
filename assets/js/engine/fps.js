"use strict";

let numberOfFrames = 0;
let lastCheckedNumberOfFrames = 0;

let calculateFPSInterval;
let showFPSInterval;
let wantedFPS = 60;
let fps;

function startCalculatingFPS() {
	stopCalculatingFPS();
	calculateFPSInterval = setInterval(calculateFPS, 1000);
}

function stopCalculatingFPS() {
	clearInterval(calculateFPSInterval);
	fps = undefined;
}

function startShowingFPS(timeInterval=1000) {
	stopShowingFPS();
	showFPSInterval = setInterval(showFPS, timeInterval);
}

function stopShowingFPS() {
	clearInterval(showFPSInterval);
}

function calculateFPS() {
	let currentNumberOfFrames = numberOfFrames;	
	fps = currentNumberOfFrames - lastCheckedNumberOfFrames;
	lastCheckedNumberOfFrames = currentNumberOfFrames;
}

function showFPS() {
	console.log("FPS : " + fps);
}
