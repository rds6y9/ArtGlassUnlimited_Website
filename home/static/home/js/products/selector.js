var currently_viewing = "Stained";
var glass_type_selector = document.getElementById("glass-type-selector");
var glass_areas = document.getElementsByClassName("glass-type-area");
var aspect_ratio = 0.5625; // 16:9 ratio
var i = 0;

function switchView() {
	currently_viewing = "";
	currently_viewing = glass_type_selector.value;
	for(i = 0; i < glass_areas.length; i++) {
		glass_areas[i].className = glass_areas[i].className.replace(" shown-selection", "");
	}
	document.getElementById(currently_viewing).className += " shown-selection";
}
