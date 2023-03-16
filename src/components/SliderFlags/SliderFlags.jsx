import React from "react";
import Slider from "react-slick";
import { data } from "./data";
import { settings } from "./utils/swiperSettings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderFlags.scss";

export const SliderFlags = () => {
  return (
    <div className="slider_swiper">
      <div className="slider_swiper--container">
        <Slider {...settings}>
          {data &&
            data.map((item) => {
              return (
                <div className="slider_swiper--item">
                  <img src={item.icon} alt={item.title} />
                  <span>{item.title}</span>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};
