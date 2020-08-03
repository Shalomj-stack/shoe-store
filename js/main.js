var nav = document.querySelector('nav');
var theme = document.querySelector('.theme');
var sideBar = document.querySelector('.sideBar');
var login = document.querySelector('.cursor');
var cancel = document.querySelector('#cancel');

/*side bar*/
login.addEventListener('click', function slide(){
    sideBar.style.animation = "slide 1s forwards";
    nav.style.animation = "move 1s forwards";
    theme.style.animation = "move 1s forwards";
    
})

/*cancel button*/
cancel.addEventListener('click', function exit(){
    sideBar.style.animation = "cancel 1s forwards";
    nav.style.animation = "return 1s forwards";
    theme.style.animation = "return 1s forwards";
    
})


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}
