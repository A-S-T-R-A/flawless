import { useState } from "react"
import styles from "./HeroGallery.module.css"
import { Hero } from "./components/Hero/Hero"
import { Gallery } from "./components/Gallery/Gallery"

export function HeroGallery() {
    const [showHero, setShowHero] = useState(true)

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Hero showHero={showHero} />
                <Gallery setShowHero={setShowHero} />
            </div>
        </div>
    )
}
