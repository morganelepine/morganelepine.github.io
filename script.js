//---------------FILTRE PROJETS

//BOUTON PAR TECHNO
function filter(button, flex, none1, none2, none3, none4) {
    document.getElementById(button).addEventListener("click", () => {
        document.querySelectorAll(flex).forEach((project) => {
            project.style.display = "flex";
        });
        document.querySelectorAll(none1).forEach((project) => {
            project.style.display = "none";
        });
        document.querySelectorAll(none2).forEach((project) => {
            project.style.display = "none";
        });
        document.querySelectorAll(none3).forEach((project) => {
            project.style.display = "none";
        });
        document.querySelectorAll(none4).forEach((project) => {
            project.style.display = "none";
        });
        AOS.init({
            once: true,
        });
        document.getElementById("buttonAll").style.display = "block";
    });
}

filter("buttonJS", ".js", ".mern", ".php", ".mobile", ".lua");
filter("buttonMern", ".mern", ".js", ".php", ".mobile", ".lua");
filter("buttonPHP", ".php", ".js", ".mern", ".mobile", ".lua");
filter("buttonMobile", ".mobile", ".lua", ".js", ".mern", ".php");
filter("buttonLua", ".lua", ".js", ".mern", ".php", ".mobile");

//BOUTON TOUS LES PROJETS
document.getElementById("buttonAll").addEventListener("click", displayAll);
function displayAll() {
    document.querySelectorAll(".js").forEach((project) => {
        project.style.display = "flex";
    });
    document.querySelectorAll(".mern").forEach((project) => {
        project.style.display = "flex";
    });
    document.querySelectorAll(".php").forEach((project) => {
        project.style.display = "flex";
    });
    document.querySelectorAll(".mobile").forEach((project) => {
        project.style.display = "flex";
    });
    document.querySelectorAll(".lua").forEach((project) => {
        project.style.display = "flex";
    });
    AOS.init({
        once: false,
    });
    document.getElementById("buttonAll").style.display = "none";
}

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
