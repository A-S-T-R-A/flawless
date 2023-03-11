import { useState, useEffect } from "react"
import video from "assets/video/video.mp4"
import videoPlaceHolder from "assets/images/main/first.webp"
import styles from "./VideoBg.module.css"

export default function VideoBg() {
    const [showVideo, setShowVideo] = useState(false)
    const [autoPlay, setAutoPlay] = useState(false)

    useEffect(() => {
        if (showVideo) {
            setAutoPlay(true)
        }
    }, [showVideo])

    return (
        <>
            <img
                src={videoPlaceHolder}
                alt="videoPlaceHolder"
                onLoad={() => setShowVideo(true)}
                className={styles.img}
            />
            {showVideo && (
                <video
                    src={video}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    playsInline
                    autoPlay={autoPlay}
                    className={styles.video}
                />
            )}
        </>
    )
}
