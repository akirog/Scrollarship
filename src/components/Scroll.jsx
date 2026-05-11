import { useState, useEffect, useRef } from 'react'
import { PlaybackControllerProvider, RiyilsViewer } from 'react-riyils'
import 'react-riyils/dist/index.css'
import Nav from './Nav'

const BASE_VIDEOS = [
    { id: '1', videoUrl: '/src/assets/Test.mp4', caption: 'Kurzegasagt' },
    { id: '2', videoUrl: '/src/assets/IMG_3354.mp4', caption: 'Kurzegasagt' }
]

function getMockVideos() {
    return BASE_VIDEOS.map(x => ({
        ...x,
        id: Math.random().toString(36).slice(2)
    }))
}

function Scroll() {
    const [videos, setVideos] = useState(BASE_VIDEOS)
    const [index, setIndex] = useState(0)
    const [viewer, setViewer] = useState(false)
    const loading = useRef(false)
    const [liked, setLiked] = useState(false)
    
    useEffect(() => {
        if (loading.current) return
        if (index >= videos.length - 2) {
            loading.current = true
            setTimeout(() => {
                setVideos(v => v.concat(getMockVideos()))
                loading.current = false
            }, 700)
        }
    }, [index, videos.length])

    const viewerControls = [
        {
            id: 'like',
            icon: (
                <i
                    className={`fa-${liked ? 'solid' : 'regular'} fa-heart`}
                    style={{
                        fontSize: 20,
                        color: liked ? '#ef4444' : 'white'
                    }}
                />
            ),
            ariaLabel: liked ? 'Unlike' : 'Like',
            onClick: () => {
                setLiked(v => !v)
                alert(liked ? 'You unliked this video.' : 'You liked this video!')
            },
            active: () => liked,
            className: 'react-riyils-viewer__btn-like'
        }
    ]

    return (
        <PlaybackControllerProvider>
            <RiyilsViewer
                videos={videos}
                initialIndex={index}
                onVideoChange={setIndex}
                onClose={() => setViewer(false)}
                enableAutoAdvance
                controls={viewerControls}
            />
        </PlaybackControllerProvider>
    )
}

export default Scroll
