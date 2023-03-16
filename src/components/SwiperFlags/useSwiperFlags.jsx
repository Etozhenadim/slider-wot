import {useRef} from "react";
import {getSwiperNavigationSettings} from "./utils/getSwiperNavigationSettings";

export const useSwiperFlags = () => {
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const swiperNavigation = getSwiperNavigationSettings(prevButtonRef, nextButtonRef);

    return (
        prevButtonRef, nextButtonRef, swiperNavigation
    )
}