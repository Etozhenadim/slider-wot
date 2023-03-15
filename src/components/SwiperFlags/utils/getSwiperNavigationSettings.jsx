import React from 'react';

export const getSwiperNavigationSettings = (
    prevButtonRef,
    nextButtonRef,
    loop= false,
) => {
    const onInit = (
        prevButtonRef,
        nextButtonRef
    ) => {
        return (swiper) => {
            (swiper.params.navigation ).prevEl = prevButtonRef.current;
            (swiper.params.navigation ).nextEl = nextButtonRef.current;

            if (loop) {
                swiper.on('navigationPrev', (swiper) => {
                    if (swiper.isBeginning) {
                        swiper.slideTo(swiper.slides.length - 1);
                    } else {
                        swiper.slideTo(swiper.realIndex);
                    }
                });
                swiper.on('navigationNext', (swiper) => {
                    if (swiper.isEnd) {
                        swiper.slideTo(0);
                    } else {
                        swiper.slideTo(swiper.realIndex);
                    }
                });
            }

            swiper.navigation.init();
            swiper.navigation.update();
        };
    };

    return {
        navigation: {
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
        },
        onInit: onInit(prevButtonRef, nextButtonRef),
    };
};