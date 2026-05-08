import { PlaybackControllerProvider } from 'react-riyils'
import 'react-riyils/dist/index.css'
import Scroll from './Scroll'

function Explore() {
    return (
        <PlaybackControllerProvider>
            <Scroll />
        </PlaybackControllerProvider>
    )
}

export default Explore