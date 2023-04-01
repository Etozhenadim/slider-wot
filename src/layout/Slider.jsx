import "./style.scss";
import {Header} from "../components/Header/Header";
import {Registration} from "../components/Registration/Registration";
import {SliderNation} from "../components/Slider/SliderNation";

export const Slider = () => {
    return (
        <div className="slider">
            <div className="slider_container">
                <Header/>
                <Registration/>
                {/*<div className="slider_main">*/}
                {/*    <Registration/>*/}
                {/*    <Banner/>*/}
                {/*</div>*/}
                {/*<SwiperFlags/>*/}
                <SliderNation/>
            </div>
        </div>
    );
};
