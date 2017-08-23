var glass_areas = document.getElementsByClassName('glass-type-area');
var glass_area_proportion = 0.41;

$(document).ready( function () {
	initializeProductsPage();
});

window.addEventListener('resize', resizeTypeWrappers);

function initializeProductsPage() {
	console.log("initializeProductsPage() ran.");
	resizeTypeWrappers();
}

function resizeTypeWrappers() {
	var i;

	console.log("resizeTypeWrappers() ran.");
	if($(window).width() <= 1200) {
		for(i = 0; i < glass_areas.length; i++) {
			glass_areas[i].style.height = glass_areas[i].offsetWidth * glass_area_proportion;
		}
	}
}
