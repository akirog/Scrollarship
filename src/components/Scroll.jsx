import Video from './Video'
import Task from './Task'
import Curriculum from '/src/assets/curriculum.json'
import { Navigation, Keyboard, Mousewheel, Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/keyboard'
import 'swiper/css/virtual'

function AppendCMS({ content }) {
    if (content.type === "video") {
        return <Video src={content.src} />
    } else if (content.type === "task") {
        return <Task question={content.question} math={content.math} answer={content.answer} />
    }
}

function Scroll() {
    const styli = {
        height: "100vh",
    }

    return (
        <Swiper
        modules={[Navigation, Keyboard, Mousewheel, Virtual]}
        direction={"vertical"}
        navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }}
        keyboard={true}
        mousewheel={true}
        style={styli}
        virtual
        >
            {Curriculum.math.map((content) => (
                <SwiperSlide virtualIndex={content.index}>
                    <AppendCMS content={content}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Scroll