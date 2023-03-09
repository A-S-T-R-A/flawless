import React, { useEffect, useRef, useState } from "react"

import { BsZoomIn, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"

import styles from "./Gallery.module.css"

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

export function Gallery() {
    const scrollRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentPercent, setCurrentPercent] = useState(0)

    function scroll(direction) {
        if (direction === "left") {
            scrollRef.current.scrollLeft -= 240
        } else {
            scrollRef.current.scrollLeft += 240
        }
    }

    function onScrollX(e) {
        const { scrollLeft, scrollWidth } = e.target

        const x = (scrollLeft / scrollWidth) * 100

        const spacePerSlide = scrollWidth / slidesCount
        const currentSlideIndex = Math.floor(scrollLeft / spacePerSlide)
        const currentSlidePercentage =
            ((scrollLeft % spacePerSlide) / spacePerSlide) * 100

        const currentPosition = scrollLeft / spacePerSlide

        console.log(currentPosition)

        setCurrentIndex(currentSlideIndex)
        setCurrentPercent(x)

        //if index === currentIndex, then this img is in viewport.
        //So it has to be translated.

        /* setPercent(x) */
    }

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
                        /* const percent =
                            index === currentIndex || index === currentIndex + 1
                                ? currentPercent
                                : 0 */

                        return (
                            <img
                                key={index}
                                src={image}
                                alt=""
                                className={styles.img}
                                draggable={false}
                                style={{
                                    objectPosition: `${
                                        /* 30 + percent / 1.45 */
                                        currentPercent
                                    }% center`,
                                }}
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
