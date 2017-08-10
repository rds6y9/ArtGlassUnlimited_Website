var menu = document.getElementById("dropdown-nav-menu");
var dropdown_breakpoint = 700;

window.onresize = function(event) {
	if($(window).width() >= dropdown_breakpoint) {
		menu.style.display = "none";
	}
};

function showAndHideMenu() {
	menu = document.getElementById("dropdown-nav-menu");
    if(menu.style.display == "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}

// NOTE TO SELF: Make the nav dropdown go away when clicking somewhere else.

/* Anything that gets to the document
   will hide the dropdown */
// $(document).click(function(){
//   $("#dropdown-nav-menu").hide();
// });

/* Clicks within the dropdown won't make
   it past the dropdown itself */
// $("#dropdown-nav-menu").click(function(e){
//   e.stopPropagation();
// });