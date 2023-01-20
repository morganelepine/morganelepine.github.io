//Changer la couleur du background selon la section
let one = "#f8ebe0";
let two = "#F9B3AC";
let three = "#f87060";

$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() >= $(".one").position().top) {
            $('body').css('background', $(".one").attr("data-color"));

    };
    if ($(document).scrollTop() > $(".two").position().top) {
            $('body').css('background', $(".two").attr("data-color"))
    };
    if ($(document).scrollTop() > $(".three").position().top) {

            $('body').css('background', $(".three").attr("data-color"))
    };
});

//Quand on scroll à 200px du haut de la page, le menu de nagation disparaît
/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("nav").style.display = "none";
    document.getElementById("navScroll").style.display = "block";
  }
  else {
    document.getElementById("nav").style.padding = "0.5%";
  }
}
*/



//---------------AOS


AOS.init({
  duration: 1200, // values from 0 to 3000, with step 50ms
});

/*
// Global settings:
AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1200, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
*/