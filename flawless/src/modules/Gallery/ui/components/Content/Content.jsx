import { useEffect } from "react"
import { NeonButton } from "modules/common/components/NeonButton/NeonButton"
import styles from "./Content.module.css"
import Aos from "aos"
import "aos/dist/aos.css"

function Content() {
    useEffect(() => {
        Aos.init({ duration: 2000 }, [])
    })

    return (
        <div
            className={styles.content}
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-once
        >
            <h1 className={styles.headText}>Наши Тусовки</h1>
            <p className={styles.introduction}>
                Лучше тусовки на диком западе. Залетайте к нам - у нас круто.
                Лучше тусовки на диком западе. Залетайте к нам - у нас круто.
                Лучше тусовки на диком западе. Залетайте к нам - у нас круто.
                Лучше тусовки на диком западе. Залетайте к нам - у нас круто.
            </p>
            <NeonButton className={styles.btn}>BUY TICKETS</NeonButton>
        </div>
    )
}

export default Content
