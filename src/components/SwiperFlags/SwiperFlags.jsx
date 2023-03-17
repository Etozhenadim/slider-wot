import React from "react";
import Slider from "react-slick";
import {data} from "./data";
import {settings} from "./utils/swiperSettings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SwiperFlags.scss";

export const SwiperFlags = () => {
    return (
        <div className="swiper">
            <div className="swiper_container">
                <Slider {...settings}>
                    {data &&
                        data.map((item) => {
                            return (
                                <div className="swiper_item">
                                    <img src={item.icon} alt={item.title}/>
                                    <span>{item.title}</span>
                                </div>
                            );
                        })}
                </Slider>
            </div>
        </div>
    );
};
