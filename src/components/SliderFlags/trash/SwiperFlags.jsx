import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import './SwiperFlags.scss'
import {swiperSettings} from '../utils/swiperSettings'
import {data} from '../data'

import 'swiper/css';
import {useSwiperFlags} from "./useSwiperFlags";


export const SwiperFlags = () => {
    const {prevButtonRef, nextButtonRef, swiperNavigation} = useSwiperFlags();

    return (
        <div className='slider_swiper'>
            <Swiper
                modules={[Navigation]}
                {...swiperSettings}
                {...swiperNavigation}
            >
                {data && data.map(item => {
                    return (
                        <SwiperSlide key={item.id}>
                            <div className='slider_swiper--item'>
                                <img src={item.icon} alt={item.title}/>

                                <span>
                               {item.title}</span>
                            </div>
                        </SwiperSlide>
                    )
                })
                }
            </Swiper>
            <>
                <button
                    type="button"
                    className="swiper-button-prev"
                    ref={prevButtonRef}
                />
                <button
                    type="button"
                    className="swiper-button-next"
                    ref={nextButtonRef}
                />
            </>
        </div>

    )
}