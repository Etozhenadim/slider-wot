import "./style.scss";
import {Banner, Header, Registration, SwiperFlags} from "../components";

export const Slider = () => {
    return (
        <div className="slider">
            <Header/>
            <div className="slider_main">
                <Registration/>
                <Banner/>
            </div>
            <SwiperFlags/>
        </div>
    );
};
