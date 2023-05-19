import { useScrollTimeoutLoading } from "modules/common/helpers/useScrollTimeoutLoading"
import { Gallery } from "modules/Gallery"
import { Hero } from "modules/Hero"
import { Main } from "modules/Main"
import { Navigation } from "modules/Navigation"
import { Rules } from "modules/Rules"
import "./index.css"
import { Footer } from "./modules/Footer"

export function App() {
    const { ready } = useScrollTimeoutLoading(500)
    return (
        <div>
            <Navigation />
            <Main />
            {ready && (
                <>
                    <Hero />
                    <Rules />
                    <Gallery />
                    <Footer />
                </>
            )}
        </div>
    )
}
