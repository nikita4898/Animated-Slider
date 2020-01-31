var index = 1;
var slideIndex = 1;
var animationDelay = 600;
var totalSlides = jQuery(".banner-slider .title-wrapper span").length;
var totalImages = jQuery(".banner-slider .img-wrapper img").length;
var slideHeight = jQuery(".banner-slider .title-wrapper span").outerHeight();

function nextSlide() {
    index += 1;
    jQuery(".banner-slider .title-wrapper span").removeClass("active");
    jQuery(".banner-slider .title-wrapper span:nth-child(" + index + ")").addClass("active");
    jQuery(".banner-slider .title-wrapper span:not(:last-child):nth-child(" + index + ")").css({
        "-webkit-animation": "blurText 0.7s forwards "+ animationDelay +"ms",
        "animation": "blurText 0.7s forwards "+ animationDelay +"ms"
    });
    animationDelay -= (index * 12);

    jQuery(".banner-slider .img-wrapper img").removeClass("active");
    setTimeout(function(){
        jQuery(".banner-slider .img-wrapper img:nth-child(" + index + ")").addClass("active");
    },100);

    jQuery(".item .test-wrapper .title-wrapper").css({
        "transform": "translateY(" + -(slideIndex * slideHeight) + "px)",
        "transition": "all "+ counter +"ms ease-in-out"
    });
    slideIndex += 1;

    if (index == totalSlides && index == totalImages) {
        setTimeout(function() {
            jQuery("body").removeClass("page-template-design-home");
            jQuery(".item .test-wrapper .tagline").addClass("active-text");
            // jQuery(".feature-list").addClass("animatedParent").find(".animated").addClass("go");
        }, 1000);
    }
}
var counter = 450;
var customSlider = function() {
    clearInterval(interval);
    if (index < totalSlides && slideIndex < totalSlides) {
        counter -= (index * 7);
        nextSlide();
    }
    interval = setInterval(customSlider, counter);
}
var interval;

jQuery(document).ready(function() {
    setTimeout(function() {
        jQuery(".banner-slider").addClass("start-animate");
        jQuery(".start-animate .title-wrapper span:first-child").addClass("active").css({
            "-webkit-animation": "blurText 0.5s forwards "+ animationDelay +"ms",
            "animation": "blurText 0.5s forwards "+ animationDelay +"ms"
        });;
        jQuery(".start-animate .img-wrapper img:first-child").addClass("active");
        interval = setInterval(customSlider, counter);
    }, 450);
});