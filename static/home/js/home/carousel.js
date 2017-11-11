var slideIndex = 0;
var wide_image_cutoff = 599;
var hero = document.getElementById('top-hero');
var slides = document.getElementsByClassName('hero-slides');
var wide_slides = document.getElementsByClassName('wide-image');
var standard_slides = document.getElementsByClassName('standard-image');
var numerator_text = document.getElementById("top-hero-numerator");


window.addEventListener('resize', changeHero);

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function resetIndex() {
    slideIndex = 0;
    showSlides(slideIndex);
}

function showSlides(n) {
    var i;

    if(slideIndex < 0) {slideIndex = wide_slides.length - 1;}
    else if(slideIndex > wide_slides.length - 1) {slideIndex = 0;}
    // Make the picture work.
    changeHero();
    numerator_text.innerHTML = slideIndex + 1;
}

function changeHero() {
    var i;
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if($(window).width() > wide_image_cutoff) {
        wide_slides[slideIndex].style.display = "block";
    } else {
        standard_slides[slideIndex].style.display = "block";
    }
}