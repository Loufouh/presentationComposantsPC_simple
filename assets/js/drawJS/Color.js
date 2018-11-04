"use strict";

class Color {
	constructor(a, b=a, c=b, d=1, type=ColorType.RGB) {
		if(!Enum.instanceOf(type, ColorType))
			return instanceError("type", "ColorType", new Color(255));

		this.type = type;

		if(this.type === ColorType.RGB) {
			this.r = a;
			this.g = b;
			this.b = c;
			this.a = d;
		} else if(this.type === ColorType.HSL) {
			this.h = a;
			this.s = b;
			this.l = c;
			this.a = d;
		}
	}

	toString() {
		if(this.type === ColorType.RGB)
			return "rgba(" + this.r + "," + this.g + "," + this.b + ", " + this.a + ")";
		else if(this.type === ColorType.HSL)
			return "hsla(" + this.h + "," + this.s + "%," + this.l + "%," + this.a + ")";
	}

	static rgb(r, g=r, b=g) {
		return Color.rgba(r, g, b);
	}

	static hsl(h, s=100, l=100) {
		return Color.hsla(h, s, l, 1);
	}

	static rgba(r, g=r, b=g, a=1) {
		return new Color(r, g, b, a);
	}

	static hsla(h, s=100, l=100, a=1) {
		return new Color(h, s, l, a, ColorType.HSL);
	}
}
