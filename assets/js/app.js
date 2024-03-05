
$(document).ready(function() {
    
    $('.slides').slick({
        infinite: true,
        slidesToShow: 1,
        nextArrow: '.icon-right',
        prevArrow: '.icon-left',
        speed:500,
        dots:true,
        arrows: true,
        dotsClass: 'container dots',
        autoplay: true
    });
});