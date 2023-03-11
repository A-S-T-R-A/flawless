import { imageHero } from "assets/images/hero"
import { heroList } from "constants/heroData"
import { NeonButton } from "modules/common/components/NeonButton/NeonButton"
import styles from "./Hero.module.css"
import NeonText from "modules/common/components/NeonText/NeonText"
import { useAos } from "modules/common/helpers/useAOS"

export function Hero() {
    useAos()

    return (
        <section className={styles.wrapper} id="about">
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img
                        data-aos="fade-up-right"
                        data-aos-duration="800"
                        data-aos-once
                        src={imageHero}
                        alt="Disc Jokey"
                        className={styles.hero}
                    />
                </div>
                <div
                    className={styles.content}
                    data-aos="fade-up-left"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-once
                >
                    <h1 className={styles.title}>
                        Flawless Dynasty{" "}
                        <NeonText className={styles.neon}>Party</NeonText>
                    </h1>
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
