var contact_image = document.getElementsByClassName("contact-image")[0];
var aspect_ratio = 0.5625;

$(document).ready( function () {
    initializeContactPage();
});

window.addEventListener('resize', resizeImages);

function initializeContactPage() {
    console.log("initializeContactPage() ran.");
    resizeImages();
}

function resizeImages() {
    // Currently only needs to resize 1 image. Currently.
    contact_image.style.height = contact_image.offsetWidth * aspect_ratio + 'px';
}
