import { useEffect, useState } from "react"

export function useMount(opened, time) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        if (opened && !mounted) {
            setMounted(true)
        } else if (!opened && mounted) {
            setTimeout(() => {
                setMounted(false)
            }, time)
        }
    }, [opened])

    return { mounted }
}
