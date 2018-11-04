"use strict";

function instanceError(variableName, instanceName, returnValue, logger=console.error) {
	return error(variableName + " isn't an instance of " + instanceName, returnValue);
}

function undefinedError(variableName, returnValue, logger=console.error) {
	return error(variableName + " is undefined", returnValue);
}

function error(message, returnValue, logger=console.error) {
	logger(message);
	return returnValue;
}

