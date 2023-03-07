import { Button, ButtonVariant } from "modules/common/Button"
import styles from "./BurgerCta.module.css"

import { SocialIcons } from "modules/common/components/SocialIcons"

export function BurgerCta({ closeClickHandler }) {
    function clickHandler() {
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })

        closeClickHandler && closeClickHandler()
    }

    return (
        <div className={styles.container}>
            <SocialIcons onClick={closeClickHandler} />
            <Button
                onClick={clickHandler}
                variant={ButtonVariant.OUTLINED}
                className={styles.contact}
            >
                Buy tickets
            </Button>
        </div>
    )
}
