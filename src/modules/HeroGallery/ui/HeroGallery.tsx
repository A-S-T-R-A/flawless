import styles from "./HeroGallery.module.css"
import "./HeroGallery.css"
import { Hero } from "./components/Hero/Hero"
import { Gallery } from "./components/Gallery/Gallery"

export function HeroGallery() {
    return (
        <div className={styles.wrapper}>
            <Hero />
            <Gallery />
        </div>
    )
}
