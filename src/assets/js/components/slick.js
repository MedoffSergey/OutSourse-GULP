 var portfolio = $("#portfolio");

portfolio.slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, //плавный переход

});

$("#portfolio-arrow-prev").on("click", function(event) {
    event.preventDefault();

    portfolio.slick('slickPrev');
});

$("#portfolio-arrow-next").on("click", function(event) {
    event.preventDefault();

    portfolio.slick('slickNext');
});
