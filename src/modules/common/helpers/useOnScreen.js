import { useState, useEffect } from "react"

export function useOnScreen(options, triggerOnce = true) {
    const [ref, setRef] = useState(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        let observer

        if (ref) {
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                }
            }, options)

            observer.observe(ref)
        }

        if (triggerOnce && visible) {
            observer.unobserve(ref)
        }

        return () => {
            if (observer && ref) {
                observer.unobserve(ref)
            }
        }
    }, [ref, options, visible, triggerOnce])

    return { setRef, visible }
}
