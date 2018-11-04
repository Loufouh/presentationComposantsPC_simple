"use strict";

let evilLink;
let evilTitle;
let evilSection;

window.onload = init;

function init() {
	evilLink = document.getElementById("evilLink");
	evilTitle = document.getElementById("evilTitle");
	evilSection = document.getElementById("evilSection");
	
	if(isCookieExists("isPresentationBugFixed=true") && !isCookieExists("isEmevilSpeechOver"))
		startEvilBugs();
	else
		evilLink.remove();
}

function startEvilBugs() {
	evilSection.classList.remove("hidden");
	evilLink.classList.remove("disabled");

	// fill evilTitle and evilSection by random characters
	evilTitle.insertAdjacentText("beforeend", new Array(10).fill().map(()=>randomChar()).join(""));
	evilSection.insertAdjacentText("beforeend", new Array(500).fill().map(()=>randomChar()).join(""));

	displayEvilOpacityBugs();
	displayEvilContentBugs();
}

function displayEvilOpacityBugs() {
	evilSection.classList.add("hidden");
	
	setTimeout(() => evilSection.classList.remove("hidden"), 100);
	setTimeout(displayEvilOpacityBugs, randomInt(100, 5000));
}

function displayEvilContentBugs() {
	let titleContent = new Array(evilTitle.textContent.length).fill().map((x, i) => evilTitle.textContent[i]);
	let sectionContent = new Array(evilSection.textContent.length).fill().map((x, i) => evilSection.textContent[i]);

	// Replace a random chars
	titleContent[randomInt(0, titleContent.length)] = randomChar();
	sectionContent[randomInt(0, sectionContent.length)] = randomChar();

	evilTitle.innerHTML = "";
	evilSection.innerHTML = "";

	evilTitle.insertAdjacentText("beforeend", titleContent.join(""));
	evilSection.insertAdjacentText("beforeend", sectionContent.join(""));

	setTimeout(displayEvilContentBugs, 20);
}

