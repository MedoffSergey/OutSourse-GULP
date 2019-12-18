 var portfolio = $("#portfolio");

portfolio.slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 200,
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
