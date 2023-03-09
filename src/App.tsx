import { Gallery } from "modules/GalleryRest"
import { Gallery as GallerySwiper } from "modules/Gallery"
import { Main } from "modules/Main"
import { Navigation } from "modules/Navigation"
import { Rules } from "modules/Rules"
import "./index.css"
import { Footer } from "./modules/Footer"

export function App() {
    return (
        <div>
            <Navigation />
            <Main />
            <Rules />
            <Rules />
            <Gallery />
            <GallerySwiper />
            <Rules />
            <Footer />
        </div>
    )
}
