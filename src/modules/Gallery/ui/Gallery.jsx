import { NeonButton } from "modules/common/components/NeonButton/NeonButton"
import { useEffect, useRef, useState } from "react"
import ImagesGallery from "./components/ImagesGallery/ImagesGallery"
import styles from "./Gallery.module.css"

export function Gallery() {
    const scrollRef = useRef(null)
    const [imageOpen, setImageOpen] = useState(-1)
    const [mouseDownAt, setMouseDownAt] = useState(0)
    const [innitialMouseDownAt, setInnitialMouseDownAt] = useState(0)
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        function mouseUpHandler(e) {
            setMouseDownAt(0)
        }
        window.addEventListener("mouseup", mouseUpHandler)

        return () => {
            window.removeEventListener("mouseup", mouseUpHandler)
        }
    })

    function scroll(direction) {
        const scrollOffset = direction === "left" ? -240 : 240
        scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft + scrollOffset,
            behavior: "smooth",
        })
    }

    function onScrollX(e) {
        const { scrollLeft, scrollWidth } = e.target
        setPercent((scrollLeft / scrollWidth) * 100)
    }

    function mouseDownHandler(e) {
        setMouseDownAt(e.clientX)
        setInnitialMouseDownAt(e.clientX)
    }

    function mouseMoveHandler(e) {
        if (mouseDownAt === 0) return
        const mouseDelta = mouseDownAt - e.clientX
        scrollRef.current.scrollLeft += mouseDelta
        setMouseDownAt(e.clientX)
    }

    function onImageOpen(e, index) {
        if (e.clientX === innitialMouseDownAt) {
            setImageOpen(index)
        }
    }

    return (
        <div
            className={styles.wrapper}
            onMouseMove={mouseMoveHandler}
            id="gallery"
        >
            {/* <Content /> */}
            <ImagesGallery
                percent={percent}
                scrollRef={scrollRef}
                onScrollX={onScrollX}
                mouseDownHandler={mouseDownHandler}
                onImageOpen={onImageOpen}
                scroll={scroll}
                imageOpen={imageOpen}
                setImageOpen={setImageOpen}
            />
            <NeonButton className={styles.btn}>BUY TICKETS</NeonButton>
        </div>
    )
}
