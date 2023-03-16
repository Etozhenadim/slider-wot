import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderFlags.scss'
import {data} from './data'


export const SliderFlags = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1720,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                }
            },

        ]
    };
    return (
        <div className='swiper'>
            <div className="swiper_container">
                <Slider {...settings}>
                    {data && data.map(item => {
                        return (
                            <div className='swiper_item'>
                                <img src={item.icon} alt={item.title}/>
                                <span>
                               {item.title}</span>
                            </div>
                        )
                    })
                    }
                </Slider>
            </div>

        </div>
    )
}