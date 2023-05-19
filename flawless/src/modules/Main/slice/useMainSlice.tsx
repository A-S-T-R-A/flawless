import { client } from "modules/common/helpers/client"
import { useEffect, useState } from "react"

export function useContactSlice() {
    const [main, setMain] = useState()

    useEffect(() => {
        const query = "*[_type == 'main']"

        client.fetch(query).then(data => {
            setMain(data)
        })
    }, [])

    return { main }
}
