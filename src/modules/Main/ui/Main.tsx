import styles from "./Main.module.css"
//@ts-ignore
import video from "assets/video/video.mp4"
import { Button, ButtonVariant } from "modules/common/Button"

const height = window.innerHeight

export function Main() {
    return (
        <div className={styles.wrapper} style={{ height: height + "px" }}>
            <video
                src={video}
                //@ts-ignore
                type="video/mp4"
                loop
                controls={false}
                muted
                playsInline
                autoPlay
                className={styles.video}
            />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>FLAWLESS</h1>
                    <p className={styles.description}>
                        An all-encompassing nightlife experience with a variety
                        of atmospheres and world-renowned musical talent.
                    </p>
                    <div className={styles.btnContainer}>
                        <Button variant={ButtonVariant.FILLED}>
                            BUY TICKETS
                        </Button>
                        <Button variant={ButtonVariant.OUTLINED}>
                            BOOK TABLE
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
