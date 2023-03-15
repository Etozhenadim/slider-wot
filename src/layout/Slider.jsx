import './style.scss';
import {Header, SwiperFlags, Registration, Banner} from '../components'

export const Slider=()=>{
  return (
    <div className="slider">
        <Header />
        <div className='slider_main'>
            <Registration />
            <Banner />
        </div>
        <SwiperFlags />
    </div>
  );
}
