import React, { useEffect, useRef, useState, useCallback } from "react"

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
const innerWidth = window.innerWidth - 32

const imgPath = innerWidth + 240

export function Gallery() {
    const scrollRef = useRef(null)

    const [bounds, setBounds] = useState([])

    useEffect(() => {
        function bounds() {
            const scrollWidth = scrollRef.current.scrollWidth
            const spacePerSlide = scrollWidth / slidesCount
            const bounds = []
            for (let i = 0; i < scrollWidth; i = i + spacePerSlide) {
                bounds.push(i)
            }

            console.log(bounds)

            setBounds(bounds) //[0, 270, 540, 810, 1080, 1350, 1620, 1890, 2160]
            return bounds
        }

        const imgPercent = []

        for (let item of bounds()) {
            const x =
                ((innerWidth - item) / imgPath) * 100 > 0
                    ? ((innerWidth - item) / imgPath) * 100
                    : 0
            imgPercent.push(x)
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

    function onScrollX(e) {
        const { scrollLeft } = e.target

        const viewport = [scrollLeft, scrollLeft + innerWidth]

        const imgPercent = []

        for (let item of bounds) {
            const x =
                ((viewport[1] - item) / imgPath) * 100 > 0
                    ? ((viewport[1] - item) / imgPath) * 100
                    : 0
            imgPercent.push(x)
        }

        setImgPercent(imgPercent)

        //console.log(enteringIn, exitingIn)

        /* 
        const x = (scrollLeft / scrollWidth) * 100

        const spacePerSlide = scrollWidth / slidesCount
        const currentSlideIndex = Math.floor(scrollLeft / spacePerSlide)
        const currentSlidePercentage =
            ((scrollLeft % spacePerSlide) / spacePerSlide) * 100

        const currentPosition = scrollLeft / slidesCount

        console.log(bounds)

        setCurrentIndex(currentSlideIndex)
        setCurrentPercent(x) */
    }

    console.log(imgPercent)

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
                            <img
                                key={index}
                                src={image}
                                alt=""
                                className={styles.img}
                                draggable={false}
                                style={{
                                    objectPosition: `${100 - percent}% center`,
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
