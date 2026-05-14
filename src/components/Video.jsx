import ReactPlayer from 'react-player'

function Video({ src }) {
  const test = {
    height: "100%",
    width: "100%",
  }

  return (
    <ReactPlayer src={src} loop={true} playsInline={true} style={test}/>
  )
}

export default Video
