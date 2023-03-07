import styles from "./VideoBg.module.css"

export function VideoBg({ src }) {
    return (
        <video
            src={src}
            //@ts-ignore
            type="video/mp4"
            loop
            controls={false}
            muted
            playsInline
            autoPlay={false}
            className={styles.video}
        />
    )
}
