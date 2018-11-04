"use strict";

function removeCookie(name) {
	setCookie(name, '', new Time(0));
}

function setCookie(name, value, time) {
	if(!(time instanceof Time))
		return instanceError("time", "Time");

	if(time === undefined) {
		document.cookie = name + "=" + value;
		return;
	}
		
	let date = new Date();
	date.setTime(date.getTime() + time.getValueIn(DurationType.MILLISECOND));
	document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";

}

function getCookie(name) {
	if(document.cookie.indexOf(name) === -1)
		return undefined;
	
	let valueIndex = document.cookie.indexOf(name) + name.length + 1;

	return document.cookie.substring(valueIndex).split(";")[0];
}

function isCookieExists(name) {
	return (document.cookie.indexOf(name) === -1)? false: true;
}
