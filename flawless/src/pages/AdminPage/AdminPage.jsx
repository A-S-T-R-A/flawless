import { useEffect } from "react"

export function AdminPage() {
    useEffect(() => {
        console.log("first")
        window.location.href = "https://flawless-admin-panel.sanity.studio/"
    }, [])

    return <div></div>
}
