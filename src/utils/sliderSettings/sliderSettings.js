export const sliderSettings = {
  speed: 700,
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  cssEase: "linear",
  slidesToScroll: 1,
  slidesToShow: 5.5,
  swipeToSlide: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        initialSlide: 2,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    },
  ],
};
