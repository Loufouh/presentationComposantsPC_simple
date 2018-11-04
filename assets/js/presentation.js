"use strict";

let bug;

window.onload = init;

function init() {
	bug = document.getElementById("bug");

	if(isCookieExists("isPresentationBugFixed")) {
		bug.remove();
	} else {
		bug.classList.remove("hidden");
		bug.addEventListener("click", fixBugMessages);
		bug.addEventListener("click", ()=> {
			bug.remove();
			setCookie("isPresentationBugFixed", "true", new Time(20, DurationType.MINUTE));
		});
	}
}

function fixBugMessages() {
	alert("Vous venez de corriger un bug !\n" + 
	      "C'est étrange, il n'était pas là pendant le développement...\n" + 
	      "On dirait qu'il y en a un autre dans le menu principal, vous pouvez le trouver et le faire disparaître s'il vous plait ?\n" + 
	      "Si vous le faites, je vais vous récompenser !");
}
