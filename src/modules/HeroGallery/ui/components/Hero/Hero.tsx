import { NeonButton } from "modules/common/components/NeonButton/NeonButton"
import { classNames } from "modules/common/helpers/classNames"
import styles from "./Hero.module.css"

interface HeroProps {
    showHero: boolean
}

export function Hero({ showHero }: HeroProps) {
    const className = classNames(styles.description, {
        [styles.hidden]: !showHero,
    })

    return (
        <div className={className}>
            <div className={styles.logo}>Наши тусовки</div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, deleniti nisi maxime ipsa temporibus obcaecati totam
                recusandae illo minus. Placeat nulla iusto illum nemo voluptas
                doloremque ab similique cupiditate rerum.
            </p>
            <NeonButton>BUY TICKETS</NeonButton>
        </div>
    )
}
