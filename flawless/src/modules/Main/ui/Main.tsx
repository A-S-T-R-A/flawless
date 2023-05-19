import styles from "./Main.module.css"
//@ts-ignore
import { VideoBg } from "modules/common/components/VideoBg"
import { NeonButton } from "modules/common/components/NeonButton/NeonButton"
import { AnimatedChevron } from "modules/common/components/AnimatedChevron/AnimatedChevron"

const height = window.innerHeight

export function Main() {
    return (
        <div
            className={styles.wrapper}
            style={{ height: height + "px" }}
            id="main"
        >
            <VideoBg />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>FLAWLESS</h1>
                    <p className={styles.description}>BEST PARTIES EVER</p>
                    <div className={styles.btnContainer}>
                        <NeonButton>BUY TICKETS</NeonButton>
                    </div>
                </div>
                <AnimatedChevron />
            </div>
        </div>
    )
}
