import './style.scss';
import {Banner, Header, Registration, SliderFlags} from '../components';

export const Slider = () => {
    return (
        <div className="slider">
            <Header/>
            <div className='slider_main'>
                <Registration/>
                <Banner/>
            </div>
            <SliderFlags/>
        </div>
    );
}
