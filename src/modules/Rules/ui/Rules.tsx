import { useEffect } from "react"
import { rulesList } from "../index"
import styles from "./Rules.module.css"
//@ts-ignore
import Aos from "aos"
import "aos/dist/aos.css"

export function Rules() {
    useEffect(() => {
        Aos.init({ duration: 2000 }, [])
    })

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.container}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once
            >
                <h3 className={styles.title}>ПРАВИЛА НАШИХ ТУСОВОК</h3>
                <ul className={styles.list}>
                    {rulesList.map(item => {
                        return (
                            <li className={styles.listItem} key={item.id}>
                                <img
                                    src={item.icon}
                                    alt="rule"
                                    className={styles.icon}
                                />
                                <p className={styles.text}>{item.text}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
