function showAndHideMenu() {
	menu = document.getElementById("dropdown-nav-menu");
    if(menu.style.display == "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}