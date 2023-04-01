import {configSliderNation} from "./configSliderNation";
import {Swiper, SwiperSlide} from 'swiper/react'
import {mock} from "./mock";

import './SliderNation.scss'

console.log(mock)
export const SliderNation = () => {
    return (
        <div className='nation'>
            <div className='nation__slider'>
                <Swiper
                    className='slider-nation'
                    {...configSliderNation}
                    // key={`slider-nation-${currentLangCode}`}
                >
                    {mock.map(({
                                   id,
                                   imgFlag,
                                   imgFlagWebP,
                                   imgTanks,
                                   imgTanksWebP,
                                   nation,
                                   quantity,
                                   type,
                                   technic,
                                   altTanks
                               }) => (
                        <SwiperSlide className='slider-nation-slide' key={id}>
                            <img className='img-flag-desktop' src={imgFlag} srcSet={imgFlagWebP} alt={nation}/>
                            <div className='content-slide'>
                                <div className='picture-slide'>
                                    <picture>
                                        <img className='img img-flag' src={imgFlag} srcSet={imgFlagWebP} alt={nation}/>
                                        <img className='img img-tanks' src={imgTanks} srcSet={imgTanksWebP}
                                             alt={altTanks}/>
                                    </picture>
                                </div>
                                <h3 className='title-slide'> {nation} </h3>
                                <div className='representation'>
                                    <p className='text representation__quantity'>  {quantity}</p>
                                    <p className='text representation__type'>  {type}</p>
                                    <p className='text representation__technic'>  {technic}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className='slider_pagination'>
                        <button id='slider-nation-btn-prev' className='nav-slider__btn-prev'></button>
                        <div id='pagin-slider-nation'
                             className='pagin-slider'></div>
                        <button id='slider-nation-btn-next' className='nav-slider__btn-next'></button>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}