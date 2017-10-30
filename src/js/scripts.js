$(document).ready(function(){
    $('.testmonials-slider').slick({
        infinite: true,
        dots: true,
        autoplaySpeed: 4000,
        autoplay: true
    });
});

var heroImg = document.querySelector('.hero-image');
var heroCopy = document.querySelector('.hero-copy');
var anim1 = new TimelineLite();

document.addEventListener("DOMContentLoaded", function() {
    anim1.add(TweenLite.from('.hero-copy', 0.5, {transform: "translateY(100px)", opacity: 0}));
    anim1.add(TweenLite.from('.hero-image', 1, {transform: "translateY(200px)", opacity: 0}));
});