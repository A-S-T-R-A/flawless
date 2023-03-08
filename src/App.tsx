import { Gallery } from "modules/Gallery"
import { HeroGallery } from "modules/HeroGallery"
import { Main } from "modules/Main"
import { Navigation } from "modules/Navigation"
import { Rules } from "modules/Rules"
import "./index.css"
import { Footer } from "./modules/Footer"

export function App() {
    return (
        <div>
            {/* <Navigation />
            <Main />
            <Rules />
            <HeroGallery />
            <Rules />
            <Footer /> */}
            <Gallery />
        </div>
    )
}
