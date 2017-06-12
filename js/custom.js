$(document).ready(function () {
    particlesJS.load('particles-js', 'js/particlesjs-config.json');


    // smooth scrolling for all anchors
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var scroll_ms = 1000;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, scroll_ms, function () {

                window.location.hash = hash;
            });
        }
    });

});

