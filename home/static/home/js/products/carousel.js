var glass_type_selector = document.getElementById("glass-type-selector");
var slideIndex = 0;
var slides = document.getElementsByClassName("faceted-slides");

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
    var slides;
    var numerator_text;
    if(glass_type_selector.value == "Stained") {
        slides = document.getElementsByClassName("stained-slides");
        numerator_text = document.getElementById("stained-numerator");
    } else if (glass_type_selector.value == "Etched") {
        slides = document.getElementsByClassName("etched-slides");
        numerator_text = document.getElementById("etched-numerator");
    } else {
        slides = document.getElementsByClassName("faceted-slides");
        numerator_text = document.getElementById("etched-numerator");
    }

    if(slideIndex < 0) {slideIndex = slides.length - 1;}
    else if(slideIndex > slides.length - 1) {slideIndex = 0;}
    if(slides.length != 0) {
        for(i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
        numerator_text.innerHTML = slideIndex + 1;
    }  
}
