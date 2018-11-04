"use strict";

let currentSequence;

let emevilThemeAudio;

function setup() {
	emevilThemeAudio = document.getElementById("emevilThemeAudio");
	startSequence1();
}

function loop() {
	background(Color.rgb(52));
	if(currentSequence === Sequence.SEQUENCE1)
		showSequence1();
	else if(currentSequence === Sequence.SEQUENCE2)
		showSequence2();
}

