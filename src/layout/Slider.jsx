import "./style.scss";
import {Header, Registration, SliderNation} from "../components";

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
