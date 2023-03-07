import styles from "./BurgerCta.module.css"

import { SocialIcons } from "modules/common/components/SocialIcons"
import { NeonButton } from "modules/common/components/NeonButton/NeonButton"

export function BurgerCta({ closeClickHandler }) {
    function clickHandler() {
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        closeClickHandler && closeClickHandler()
    }

    return (
        <div className={styles.container}>
            <SocialIcons onClick={closeClickHandler} className={styles.icons} />
            <NeonButton onClick={clickHandler} className={styles.contact}>
                BUY TICKETS
            </NeonButton>
        </div>
    )
}
