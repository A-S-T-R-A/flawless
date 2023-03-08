import { useState } from "react"
import { SliderBg } from "./components/SliderBg/SliderBg"
import { SliderMain } from "./components/SliderMain/SliderMain"
import styles from "./Gallery.module.css"

interface GalleryProps {
    setShowHero: any
}

export function Gallery({ setShowHero }: GalleryProps) {
    const [controlledSwiper, setControlledSwiper] = useState(null)

    return (
        <div className={styles.container}>
            <SliderMain
                controlledSwiper={controlledSwiper}
                setShowHero={setShowHero}
            />
            <SliderBg setControlledSwiper={setControlledSwiper} />
        </div>
    )
}
