import { useRef, useState, useLayoutEffect } from "react"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import styles from "./Gallery.module.css"
import throttle from "lodash.throttle"

import {
    firstImg,
    secondImg,
    thirdImg,
    fourthImg,
    fifthImg,
    sixthImg,
    seventhImg,
    eightsImg,
    ninethImg,
} from "assets/images/heroGallery"
import Image from "./components/Image/Image"

const galleryImages = [
    firstImg,
    secondImg,
    thirdImg,
    fourthImg,
    fifthImg,
    sixthImg,
    seventhImg,
    eightsImg,
    ninethImg,
]
const slidesCount = galleryImages.length
const innerWidth = window.innerWidth - 32

const imgPath = innerWidth + 240

export function Gallery() {
    const scrollRef = useRef(null)

    const [bounds, setBounds] = useState([])

    useLayoutEffect(() => {
        const scrollWidth = scrollRef.current.scrollWidth
        const spacePerSlide = scrollWidth / slidesCount
        const bounds = []
        for (let i = 0; i < scrollWidth; i = i + spacePerSlide) {
            bounds.push(i)
        }
        setBounds(bounds) //[0, 270, 540, 810, 1080, 1350, 1620, 1890, 2160]
        const imgPercent = []

        for (let item of bounds) {
            const x = ((innerWidth - item) / imgPath) * 100
            imgPercent.push(Math.min(Math.max(x, 0), 100))
        }
        setImgPercent(imgPercent)
    }, [])

    const [imgPercent, setImgPercent] = useState([])

    function scroll(direction) {
        if (direction === "left") {
            scrollRef.current.scrollLeft -= 240
        } else {
            scrollRef.current.scrollLeft += 240
        }
    }

    const onScrollX = throttle(e => {
        const { scrollLeft } = e.target
        const imgPercent = []
        for (let bound of bounds) {
            const x = ((scrollLeft + innerWidth - bound) / imgPath) * 100
            imgPercent.push(Math.min(Math.max(x, 0), 100))
        }
        setImgPercent(imgPercent)
        console.log("fired")
    }, 100)

    //console.log(imgPercent)

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.headText}>Photo Gallery</h1>
                <p className={styles.introduction}>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed
                    Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                    Aliqua.
                </p>
                <button className={styles.viewButton}>View More</button>
            </div>
            <div className={styles.galleryImages}>
                <div
                    className={styles.imagesContainer}
                    ref={scrollRef}
                    onScroll={onScrollX}
                >
                    {galleryImages.map((image, index) => {
                        const percent = imgPercent[index]

                        return (
                            <Image
                                key={index}
                                percent={percent}
                                image={image}
                            />
                        )
                    })}
                </div>
                <div className={styles.imagesArrows}>
                    <BsArrowLeftShort
                        className={styles.arrowIcon}
                        onClick={() => scroll("left")}
                    />
                    <BsArrowRightShort
                        className={styles.arrowIcon}
                        onClick={() => scroll("right")}
                    />
                </div>
            </div>
        </div>
    )
}
