import { rulesList } from "../index"
import styles from "./Rules.module.css"

export function Rules() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
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
