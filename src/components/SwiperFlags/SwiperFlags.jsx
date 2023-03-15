
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import './SwiperFlags.scss'
import "swiper/css";
// import "swiper/css/navigation";
import {getSwiperNavigationSettings} from "./utils/getSwiperNavigationSettings";
import {swiperSettings} from './swiperSettings'
import {data} from './data'



export const SwiperFlags = () =>{
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const swiperNavigation = getSwiperNavigationSettings(prevButtonRef, nextButtonRef);
    return (
        <div className='slider_swiper'>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                {...swiperNavigation}
                {...swiperSettings}
            >
                {data && data.map(item=>{
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