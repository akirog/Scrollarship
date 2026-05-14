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
  if (content.type === 'video') {
    return <Video src={content.src} />
  } else if (content.type === 'task') {
    return <Task question={content.question} math={content.math} answer={content.answer} />
  }
}

function handlePlaying() {
  const videos = document.querySelectorAll('hls-video')
  const visibleVideo = document.querySelector('.swiper-slide-active hls-video')
  if (videos) {
    videos.forEach(hlsVideo => {
    hlsVideo.pause()
    hlsVideo.currentTime = 0
  })}
  if (visibleVideo) {
    visibleVideo.play()
  }
}

function Scroll() {
  const swiperContainer = {
    height: '100vh',
  }

  return (
    <Swiper
    modules={[Navigation, Keyboard, Mousewheel, Virtual]}
    direction={'vertical'}
    slidesPerView={1.02}
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }}
    keyboard={true}
    mousewheel={true}
    style={swiperContainer}
    onSlideChangeTransitionEnd={() => handlePlaying()}
    virtual
    >
      {Curriculum.math.map((content, index) => (
        <SwiperSlide virtualIndex={index}>
          <AppendCMS content={content}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Scroll
