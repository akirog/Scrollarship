import { RiyilsViewer } from 'react-riyils'

function Scroll() {
    return (
    <RiyilsViewer
        videos={["/src/assets/WIPbussen.mp4"]}
        initialIndex={0}
        onClose={() => setViewer(false)}
        controls={viewerControls}
    />
    )
}

export default Scroll