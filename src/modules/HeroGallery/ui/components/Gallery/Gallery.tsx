import { useState } from "react"
import { SliderBg } from "./components/SliderBg"
import { SliderMain } from "./components/SliderMain"

export function Gallery() {
    const [controlledSwiper, setControlledSwiper] = useState(null)

    return (
        <>
            <SliderMain controlledSwiper={controlledSwiper} />
            <SliderBg setControlledSwiper={setControlledSwiper} />
        </>
    )
}
