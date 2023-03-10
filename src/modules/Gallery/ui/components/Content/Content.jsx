import { NeonButton } from "modules/common/components/NeonButton/NeonButton"
import styles from "./Content.module.css"

function Content() {
    return (
        <div className={styles.content}>
            <h1 className={styles.headText}>Фотогалерея</h1>
            <p className={styles.introduction}>
                Лучше тусовки на диком западе. Залетайте к нам - у нас круто.
                Лучше тусовки на диком западе. Залетайте к нам - у нас круто.
                Лучше тусовки на диком западе. Залетайте к нам - у нас круто.
                Лучше тусовки на диком западе. Залетайте к нам - у нас круто.
            </p>
            <NeonButton>ЗАЛЕТЕТЬ</NeonButton>
        </div>
    )
}

export default Content
