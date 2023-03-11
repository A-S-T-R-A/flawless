import { rulesList } from "../index"
import styles from "./Rules.module.css"
import NeonText from "modules/common/components/NeonText/NeonText"
import { useAos } from "modules/common/helpers/useAOS"

export default function Rules() {
    useAos()

    return (
        <div className={styles.wrapper} id="rules">
            <div
                className={styles.container}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once
            >
                <h1 className={styles.title}>
                    Our
                    <NeonText className={styles.neon}>Rules</NeonText>
                </h1>
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
