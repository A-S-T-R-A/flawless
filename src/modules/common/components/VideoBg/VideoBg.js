import video from "assets/video/video.mp4"
import styles from "./VideoBg.module.css"

export function VideoBg() {
    return (
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
    )
}
