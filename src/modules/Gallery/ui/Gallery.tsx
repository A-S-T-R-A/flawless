import { useState, useRef } from "react"
import styles from "./Gallery.module.css"
import { ImagesList } from "./components/ImagesList"

interface trackRefProps {
    style: any
}

export function Gallery() {
    const [mouseDownAt, setMouseDownAt] = useState(0)
    const [percentageScrolled, setPercentageScrolled] = useState(0)
    const [prevPercentage, setPrevPercentage] = useState(0)

    const trackRef = useRef<trackRefProps>(null)

    function mouseDownHandler(e: any) {
        setMouseDownAt(e.clientX)
    }

    function mouseMoveHandler(e: any) {
        if (mouseDownAt === 0) return

        const mouseDelta = mouseDownAt - e.clientX
        const maxDelta = window.innerWidth / 2

        const percentage = (mouseDelta / maxDelta) * -100
        const percentageUnconstrained = prevPercentage + percentage
        const nextPercentage = Math.max(
            Math.min(percentageUnconstrained, 0),
            -100
        )

        setPercentageScrolled(nextPercentage)

        if (trackRef.current) {
            trackRef.current.style.transform = `translate(${nextPercentage}% , -50%)`
        }
    }

    function mouseUpHandler() {
        setMouseDownAt(0)
        setPrevPercentage(percentageScrolled)
    }

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.container}
                onMouseDown={mouseDownHandler}
                onTouchStart={e => {
                    mouseDownHandler(e.touches[0])
                }}
                onMouseUp={mouseUpHandler}
                onTouchEnd={e => {
                    mouseDownHandler(e.touches[0])
                }}
                onMouseMove={mouseMoveHandler}
                onTouchMove={e => {
                    mouseDownHandler(e.touches[0])
                }}
            >
                <div
                    className={styles.imageTrack}
                    //@ts-ignore
                    ref={trackRef}
                >
                    <ImagesList percentageScrolled={percentageScrolled} />
                </div>
            </div>
        </div>
    )
}
