"use strict";

class Enum {
	static instanceOf(instance, object) {
		for(let key in object) 
			if(instance === object[key])
				return true;
		return false;
	}
}
