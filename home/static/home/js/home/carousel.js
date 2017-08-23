var slideIndex = 0;
var hero = document.getElementById('top-hero');
var slides = document.getElementsByClassName('hero-slides');
var numerator_text = document.getElementById("top-hero-numerator");
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

    if(slideIndex < 0) {slideIndex = slides.length - 1;}
    else if(slideIndex > slides.length - 1) {slideIndex = 0;}
    // Make the picture work.
    changeHero();
    numerator_text.innerHTML = slideIndex + 1;
}

function changeHero() {
    var i;
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}