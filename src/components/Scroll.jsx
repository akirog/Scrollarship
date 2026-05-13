import Task from './Task'
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/keyboard'
import 'swiper/css/scrollbar'

function Scroll() {
    const styli = {
        height: "100vh",
    }

    return (
        <Swiper
        modules={[Navigation, Keyboard, Mousewheel]}
        direction={"vertical"}
        navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }}
        keyboard={true}
        mousewheel={true}
        style={styli}
        >
            <SwiperSlide><Task question={"Test!"}/></SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
    )
}

export default Scroll