import "./style.scss";
import {Header, Registration, SliderNation} from "../components";

export const Slider = () => {
    return (
        <div className="slider">
            <div className="slider_container">
                <Header/>
                <Registration/>
                <SliderNation/>
            </div>
        </div>
    );
};
