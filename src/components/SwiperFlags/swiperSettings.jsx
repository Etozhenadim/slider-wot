export const swiperSettings = {
    speed: 1000,
    spaceBetween: 10,
    loop: false,
    breakpoints: {
        1720: {
            slidesPerView: 6,
        },
        1440: {
            slidesPerView: 5,
        },
        640: {
            slidesPerView: 4,
        },
        320: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
    },
};