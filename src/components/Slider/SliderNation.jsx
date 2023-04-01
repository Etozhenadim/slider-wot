import {configSliderNation} from "./configSliderNation";
import {Swiper, SwiperSlide} from 'swiper/react'
import {mock} from "./mock";
import {MText} from "./Text";
import './SliderNation.scss'

export const varsText = {
    hidden: {
        y: '10%',
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: custom * 0.2,
            duration: 1,
        },
    }),
}
export const confTextAnimScroll = {
    initial: 'hidden',
    whileInView: 'visible',
    variants: varsText,
    viewport: {once: false, amount: 0.2},
}
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
                                <MText
                                    tag='h3'
                                    className='title-slide'
                                    {...confTextAnimScroll}>
                                    {nation}
                                </MText>
                                <div className='representation'>
                                    <MText
                                        className='text representation__quantity'
                                        {...confTextAnimScroll}>
                                        {quantity}
                                    </MText>
                                    <MText
                                        className='text representation__type'
                                        {...confTextAnimScroll}>
                                        {type}
                                    </MText>
                                    <MText
                                        className='text representation__technic'
                                        {...confTextAnimScroll}>
                                        {technic}
                                    </MText>
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