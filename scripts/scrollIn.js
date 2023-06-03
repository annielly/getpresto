/////// Scroll Fade In ///////
let fadeInElm = document.querySelectorAll(".scrollFadeIn");
fadeInElm.forEach(function(fadeIn) {
    let windowHeight = window.innerHeight;

    window.addEventListener('scroll', function() {
        let offset = fadeIn.getBoundingClientRect().top;
        let scroll = window.screenY;

        if(scroll > offset - windowHeight + 100) {
            fadeIn.classList.add("scrollIn");
        } else {
            fadeIn.classList.remove("scrollIn");
        }
    })
});