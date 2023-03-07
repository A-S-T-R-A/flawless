import { Main } from "modules/Main"
import { Navigation } from "modules/Navigation"
import "./index.css"
import { Footer } from "./modules/Footer"

export function App() {
    return (
        <div>
            <Navigation />
            <Main />
            <Footer />
        </div>
    )
}
