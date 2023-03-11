import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export function useAos() {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })

        return () => {
            Aos.refresh()
        }
    }, [])

    return Aos
}
