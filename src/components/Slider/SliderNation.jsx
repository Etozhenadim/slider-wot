import {configSliderNation} from "./utils/configSliderNation";
import {Swiper, SwiperSlide} from 'swiper/react'
import {mock} from "./utils/mock";
import {MText} from "./utils/Text";
import './SliderNation.scss'

console.log(mock)
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
                            <picture>
                                <img className='img img-flag-desktop' src={imgFlag} srcSet={imgFlagWebP} alt={nation}/>
                            </picture>
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
                                    <div className='representation__list'>
                                        {technic && technic.map((name, index) => (
                                            <MText className='text representation__technic' {...confTextAnimScroll}>
                                                {`${name}`}
                                                {index < technic.length - 1 && <span>, </span>}
                                            </MText>
                                        ))}
                                    </div>

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