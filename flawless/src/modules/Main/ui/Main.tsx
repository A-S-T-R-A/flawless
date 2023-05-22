import styles from "./Main.module.css"
//@ts-ignore
import { VideoBg } from "modules/common/components/VideoBg"
import { NeonButton } from "modules/common/components/NeonButton/NeonButton"
import { AnimatedChevron } from "modules/common/components/AnimatedChevron/AnimatedChevron"
import { client } from "modules/common/helpers/client"
import { useEffect, useState } from "react"

const height = window.innerHeight

export function Main() {
    const [main, setMain] = useState<any>()

    useEffect(() => {
        const query = "*[_type == 'main']"

        client.fetch(query).then(data => {
            setMain(data?.[0])
        })
    }, [])

    if (!main) return null

    return (
        <div className={styles.wrapper} style={{ height: height + "px" }} id="main">
            <VideoBg />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{main.title}</h1>
                    <p className={styles.description}>{main.tagline}</p>
                    <div className={styles.btnContainer}>
                        <NeonButton>BUY TICKETS</NeonButton>
                    </div>
                </div>
                <AnimatedChevron />
            </div>
        </div>
    )
}
