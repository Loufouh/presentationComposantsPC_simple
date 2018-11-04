"use strict";

class Animation {
	constructor(spriteSheet, pos, indeces, lifeSpans, dim=spriteSheet.spritesDim) {
		this.spriteSheet = spriteSheet;
		this.pos = pos;
		this.indeces = indeces;
		this.lifeSpans = lifeSpans;
		this.dim = dim;

		this.currentLifeSpan = lifeSpans[0];
		this.currentSpriteIndex = 0;
	}

	draw() {
		drawImage(this.spriteSheet.img,
				  this.indeces[this.currentSpriteIndex]*(this.spriteSheet.spritesDim.x + this.spriteSheet.borderSize) + this.spriteSheet.borderSize, 0,
				  this.spriteSheet.spritesDim.x, this.spriteSheet.spritesDim.y,
				  this.pos.x, this.pos.y,
				  this.dim.x, this.dim.y);

		this.currentLifeSpan--;

		if(this.currentLifeSpan <= 0) {
			this.currentSpriteIndex = (this.currentSpriteIndex < this.lifeSpans.length - 1)? (this.currentSpriteIndex + 1): 0;
			this.currentLifeSpan = this.lifeSpans[this.currentSpriteIndex];
		}

	}
}
