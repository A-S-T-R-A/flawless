import { useState } from "react"
import video from "assets/video/flawless-desktop.mp4"
import videoPlaceHolder from "assets/images/main/first.webp"
import styles from "./VideoBg.module.css"

export default function VideoBg() {
    const [showVideo, setShowVideo] = useState(false)

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
                    autoPlay={true}
                    className={styles.video}
                />
            )}
        </>
    )
}
