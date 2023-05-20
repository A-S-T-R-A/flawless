import { useEffect, useState, useMemo } from "react"
import styles from "./Rules.module.css"
import NeonText from "modules/common/components/NeonText/NeonText"
import { useAos } from "modules/common/helpers/useAOS"
import { client } from "modules/common/helpers/client"
import { reformatData } from "modules/common/helpers/reformatData"

export default function Rules() {
    useAos()

    const [rules, setRules] = useState<any>()

    useEffect(() => {
        const query = "*[_type == 'rules']"

        client.fetch(query).then(data => {
            setRules(data?.[0])
        })
    }, [])

    const rulesList = useMemo(() => rules && reformatData(rules.icons, rules.rules), [rules])

    if (!rules) return null

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
                    {rulesList.map((item: any, index: number) => {
                        return (
                            <li className={styles.listItem} key={index}>
                                <img src={item.icon} alt="rule" className={styles.icon} />
                                <p className={styles.text}>{item.text}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
