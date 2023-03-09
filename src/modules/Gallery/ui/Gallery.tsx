import { useState } from "react"
import { SliderBg } from "./components/SliderBg/SliderBg"
import { SliderMain } from "./components/SliderMain/SliderMain"
import styles from "./Gallery.module.css"

export function Gallery() {
    const [controlledSwiper, setControlledSwiper] = useState(null)

    return (
        <div className={styles.container}>
            <SliderMain controlledSwiper={controlledSwiper} />
            <SliderBg setControlledSwiper={setControlledSwiper} />
        </div>
    )
}
