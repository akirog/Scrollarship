import Curriculum from '/src/assets/curriculum.json'
import { Navigation, Keyboard, Mousewheel, Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactPlayer from 'react-player'
import { useState } from 'react'
import { InlineMath, BlockMath } from 'react-katex'
import { wideCharacterFont } from 'katex/src/wide-character.js'
import 'katex/dist/katex.min.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/keyboard'
import 'swiper/css/virtual'

function Sidebar() {
  return (
    <div></div>
  )
}

function AppendCMS({ content }) {
  if (content.type === 'video') {
    return <Video src={content.src} />
  } else if (content.type === 'task') {
    return <Task question={content.question} math={content.math} correctAnswer={content.answer} />
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

function Video({ src }) {
  const videoContainer = {
    display: "flex",
    height: "100%",
    justifyContent: "center",
  }
  const playback = {
    height: "100%",
    width: "none",
    borderRadius: "3rem",
    overflow: "hidden",
  }

  return (
    <div style={videoContainer}>
      <ReactPlayer src={src} loop={true} playsInline={true} style={playback} controls={true}/>
    </div>
  )
}

function Task({ question, math, correctAnswer }) {
  const [answer, setAnswer] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit =  event => {
    console.log("iydgfu")
    event.preventDefault()
    if (answer == correctAnswer) {
      setResponse("CORRECT GOOD!!")
    } else {
      setResponse("NOT CORRECT!!")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='ftext'>{question} <InlineMath math={math} /></label><br />
        <input type='text' id='ftext' onChange={event => setAnswer(event.target.value)} value={answer} required/><br />
        <p>{response}</p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
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
    spaceBetween={10}
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

function Explore() {
  return (
    <main>
      <Sidebar />
      <Scroll />
    </main>
  )
}

export default Explore
