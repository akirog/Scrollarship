import ReactPlayer from 'react-player'

function Video({ src }) {
    return (
        <ReactPlayer src={src} muted={true} loop={true} playing={true} playsInline={true}/>
    )
}

export default Video