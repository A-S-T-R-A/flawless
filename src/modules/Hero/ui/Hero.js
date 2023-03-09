import { imageHero } from "assets/images/hero"
import { heroList } from "constants/heroData"
import { NeonButton } from "modules/common/components/NeonButton/NeonButton"
import styles from "./Hero.module.css"

export function Hero() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img
                        src={imageHero}
                        alt="Disc Jokey"
                        className={styles.hero}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Flawless Dynasty Party</h1>
                    <ul className={styles.list}>
                        {heroList.map(item => {
                            return (
                                <li className={styles.listItem} key={item.id}>
                                    <img
                                        src={item.icon}
                                        alt="Hero"
                                        className={styles.icon}
                                    />
                                    <p className={styles.text}>{item.text}</p>
                                </li>
                            )
                        })}
                    </ul>
                    <NeonButton className={styles.btn}>BUY TICKET</NeonButton>
                </div>
            </div>
        </section>
    )
}
