import { NeonButton } from "modules/common/components/NeonButton/NeonButton"
import styles from "./Hero.module.css"
import NeonText from "modules/common/components/NeonText/NeonText"
import { useAos } from "modules/common/helpers/useAOS"
import { useEffect, useMemo, useState } from "react"
import { client, urlFor } from "modules/common/helpers/client"
import { reformatData } from "modules/common/helpers/reformatData"

export default function Hero() {
    const [hero, setHero] = useState()
    useAos()

    useEffect(() => {
        const query = "*[_type == 'hero']"

        client.fetch(query).then(data => {
            setHero(data?.[0])
        })
    }, [])

    const heroList = useMemo(() => hero && reformatData(hero.icons, hero.paragraphs), [hero])

    if (!hero) return null

    return (
        <section className={styles.wrapper} id="about">
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img
                        data-aos="fade-up-right"
                        data-aos-duration="800"
                        data-aos-once
                        src={urlFor(hero?.poster)}
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
                        {hero.title}
                        <br />
                        <NeonText className={styles.neon}>{hero.neonTitle}</NeonText>
                    </h1>
                    <ul className={styles.list}>
                        {heroList.map((item, index) => {
                            return (
                                <li className={styles.listItem} key={index}>
                                    <img src={item.icon} alt="Hero" className={styles.icon} />
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
