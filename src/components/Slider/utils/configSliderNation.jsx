import {A11y, Navigation, Pagination} from 'swiper'

import {mock} from "./mock";

export const configSliderNation = {
    modules: [
        Navigation,
        Pagination,
        A11y,
    ],
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    loopedSlides: 2,
    speed: 1000,
    autoHeight: false,
    navigation: {
        nextEl: '#slider-nation-btn-next',
        prevEl: '#slider-nation-btn-prev',
    },
    pagination: {
        el: '#pagin-slider-nation',
        clickable: true,
        renderBullet: (index, className) => {
            return `
			<div class="${className}">
				<picture>
					<source srcset="${mock[index].imgPaginWebP}" type="image/webp">
					<img class="${className}__img" src="${mock[index].imgPagin}" alt="${mock[index].nation}">
				</picture>
				<div class="${className}__title">${mock[index].nation}</div>
			</div>`
        }
    },
    simulateTouch: false,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: false
}