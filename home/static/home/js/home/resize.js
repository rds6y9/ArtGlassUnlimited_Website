var top_hero = document.getElementById("top-hero");
var caption_over = document.getElementById("top-hero-caption-over");
var caption_under = document.getElementById("top-hero-caption-under");
var wide_aspect_ratio = 0.40;
var aspect_ratio = 0.5625;

$(document).ready( function () {
	initializeHomePage();
});

window.addEventListener('resize', resizeHero);

function initializeHomePage() {
	console.log("initializeHomePage() ran.");
	resizeHero();
}

function resizeHero() {
	console.log("resizeHero() ran.");
	if($(window).width() < 600) {
		top_hero.style.height = top_hero.offsetWidth * aspect_ratio + 'px';
	} else {
		top_hero.style.height = top_hero.offsetWidth * wide_aspect_ratio + 'px';
	}
	adjustCaption();
}

function adjustCaption() {
	console.log("adjustCaption() ran.");
	if($(window).width() < 800) {
		caption_over.style.display = "none";
		caption_under.style.display = "block";
	} else {
		caption_over.style.display = "block";
		caption_under.style.display = "none";
	}
}