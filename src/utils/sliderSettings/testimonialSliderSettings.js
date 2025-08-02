export const testimonialSliderSettings = {
  speed: 700,
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  cssEase: "linear",
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        initialSlide: 2,
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
