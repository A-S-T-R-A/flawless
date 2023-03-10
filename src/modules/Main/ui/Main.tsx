import styles from "./Main.module.css"
//@ts-ignore
import video from "assets/video/video.mp4"
import { VideoBg } from "modules/common/components/VideoBg"
import { NeonButton } from "modules/common/components/NeonButton/NeonButton"
import { AnimatedChevron } from "modules/common/components/AnimatedChevron/AnimatedChevron"

const height = window.innerHeight

export function Main() {
    return (
        <div className={styles.wrapper} style={{ height: height + "px" }}>
            <VideoBg src={video} />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>FLAWLESS</h1>
                    <p className={styles.description}>
                        "Мы не просто создаем вечеринки, мы создаем волшебные
                        моменты, которые оживляются в памяти каждый раз, когда о
                        них вспоминаешь!"
                    </p>
                    <div className={styles.btnContainer}>
                        <NeonButton>BUY TICKETS</NeonButton>
                    </div>
                </div>
                <AnimatedChevron />
            </div>
        </div>
    )
}
