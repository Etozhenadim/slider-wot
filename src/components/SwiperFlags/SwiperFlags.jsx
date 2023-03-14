import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import './SwiperFlags.scss'
import "swiper/css";
import "swiper/css/navigation";

import {swiperSettings} from './swiperSettings'
import {data} from './data'

export const SwiperFlags = () =>{
    return (
        <div className='slider_swiper'>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                {...swiperSettings}
            >
                {data && data.map(item=>{
                       return (
                           <SwiperSlide key={item.id}>
                           <div className='slider_swiper--item'>
                               <img src={item.icon} alt={item.title}/>
                               {item.title}
                           </div>
                         </SwiperSlide>
                       )
                    })
                }

            </Swiper>
        </div>

    )
}