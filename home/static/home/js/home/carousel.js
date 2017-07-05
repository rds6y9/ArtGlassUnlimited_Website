var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dots");
    var info = document.getElementsByClassName("slide-text");
    if(slideIndex < 0) {slideIndex = slides.length - 1;}
    else if(slideIndex > slides.length - 1) {slideIndex = 0;}
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" selected-dot", "");
        info[i].className = info[i].className.replace(" selected-text", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " selected-dot";
    info[slideIndex].className += " selected-text";
}
