import { useEffect } from "react"

export function AdminPage() {
    useEffect(() => {
        window.location.href = "https://flawless-admin-panel.sanity.studio/"
    }, [])

    return null
}
