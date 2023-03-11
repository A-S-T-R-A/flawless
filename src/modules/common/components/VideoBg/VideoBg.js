import { useState } from "react"
import video from "assets/video/video.mp4"
import videoPlaceHolder from "assets/images/main/first.webp"
import styles from "./VideoBg.module.css"

export default function VideoBg() {
    const [showVideo, setShowVideo] = useState(false)

    function handleLoad() {
        window.addEventListener("scroll", () => {
            setShowVideo(true)
        })
    }

    return (
        <>
            <img
                src={videoPlaceHolder}
                alt="videoPlaceHolder"
                onLoad={handleLoad}
            />
            {showVideo && (
                <video
                    src={video}
                    //@ts-ignore
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    playsInline
                    autoPlay={true}
                    className={styles.video}
                />
            )}
        </>
    )
}
