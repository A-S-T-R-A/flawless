import { useState, useRef, useEffect } from "react"
import video from "assets/video/video.mp4"
import videoPlaceHolder from "assets/images/main/first.webp"
import styles from "./VideoBg.module.css"

export default function VideoBg() {
    const [showVideo, setShowVideo] = useState(false)
    const videoRef = useRef()

    useEffect(() => {
        function handlePlay() {
            videoRef.current.play()
            console.log("canplay")
        }

        if (showVideo) {
            videoRef.current.addEventListener("canplaythrough", handlePlay)
        }

        return () => {
            videoRef.current.removeEventListener("canplaythrough", handlePlay)
        }
    }, [showVideo])

    return (
        <>
            <img
                src={videoPlaceHolder}
                alt="videoPlaceHolder"
                onLoad={() => setShowVideo(true)}
            />
            {showVideo && (
                <video
                    ref={videoRef}
                    src={video}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    playsInline
                    className={styles.video}
                />
            )}
        </>
    )
}
