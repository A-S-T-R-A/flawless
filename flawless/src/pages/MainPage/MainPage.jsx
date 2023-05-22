import { Footer } from "modules/Footer"
import Gallery from "modules/Gallery/ui/Gallery"
import Hero from "modules/Hero/ui/Hero"
import { Main } from "modules/Main"
import Rules from "modules/Rules/ui/Rules"
import { useScrollTimeoutLoading } from "modules/common/helpers/useScrollTimeoutLoading"

export function MainPage() {
    const { ready } = useScrollTimeoutLoading(500)

    return (
        <div>
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
