import { useState, useEffect } from "react"

export function useScrollTimeoutLoading(delay = 1000) {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        const timeout = setTimeout(() => {
            setReady(true)
            window.removeEventListener("scroll", handleScroll)
            clearTimeout(timeout)
        }, delay)

        function handleScroll() {
            setReady(true)
            window.removeEventListener("scroll", handleScroll)
            clearTimeout(timeout)
        }

        return () => {
            clearTimeout(timeout)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [ready, delay])

    return { ready }
}
