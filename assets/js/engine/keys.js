"use strict";

const keys = {
	UP: "ArrowUp",
	DOWN: "ArrowDown",
	LEFT: "ArrowLeft",
	RIGHT: "ArrowRight"
}

let keys_state = {
	UP: false,
	DOWN: false,
	LEFT: false,
	RIGHT: false
};

function initKeyListeners() {
	window.addEventListener("keyup", keyupListener);
	window.addEventListener("keydown", keydownListener);
}

function keyupListener(evt) {
	switch(evt.key) {
		case keys.UP:
			keys_state.UP = false;
			break;
		case keys.DOWN:
			keys_state.DOWN = false;
			break;
		case keys.LEFT:
			keys_state.LEFT = false;
			break;
		case keys.RIGHT:
			keys_state.RIGHT = false;
			break;
		default:
			break;
	}
}

function keydownListener(evt) {
	switch(evt.key) {
		case keys.UP:
			keys_state.UP = true;
			break;
		case keys.DOWN:
			keys_state.DOWN = true;
			break;
		case keys.LEFT:
			keys_state.LEFT = true;
			break;
		case keys.RIGHT:
			keys_state.RIGHT = true;
			break;
		default:
			break;
	}
}
