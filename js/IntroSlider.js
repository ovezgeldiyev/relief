$(function () {
  $(".intro__inner-slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    variableWidth: true,
    speed: 1400,
    pauseOnHover: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          focusOnSelect: false,
          variableWidth: false,
          speed: 500,
        },
      },
    ],
  });
});
