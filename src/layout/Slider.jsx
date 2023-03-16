import './style.scss';
import {Banner, Header, Registration} from '../components'
import {SliderFlags} from "../components/SliderFlags/SliderFlags";

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
