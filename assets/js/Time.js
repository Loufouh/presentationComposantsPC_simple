"use strict";

class Time {
	constructor(value, type=DurationType.MILLISECOND) {
		this.setValue(value, type);
	}

	getValueIn(type=DurationType.MILLISECOND) {
		return Time.convertTo(this.value, DurationType.MILLISECOND, type);
	}

	setValue(value, type) {
		this.value = Time.convertTo(value, type, DurationType.MILLISECOND);
	}

	static convertTo(value, type, wantedType) {
		if(!Enum.instanceOf(type, DurationType))
			return instanceError("type", "DurationType", 1);
		if(!Enum.instanceOf(wantedType, DurationType))
			return instanceError("wantedType", "DurationType", 1);

		return value*type/wantedType;
	}
}
