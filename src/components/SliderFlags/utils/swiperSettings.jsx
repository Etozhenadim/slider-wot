export const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1720,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        touchMove: true,
        draggable: true,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        touchMove: true,
        draggable: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        touchMove: true,
        draggable: true,
      },
    },
  ],
};
