import React, { useRef } from "react"

import { BsZoomIn, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"

import styles from "./Gallery.module.css"

import {
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
} from "assets/gallery"

const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
]

export function Gallery() {
    const scrollRef = useRef(null)
    function scroll(direction) {
        const { current } = scrollRef

        if (direction === "left") {
            current.scrollLeft -= 300
        } else {
            current.scrollLeft += 300
        }
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.headText}>Photo Gallery</h1>
                <p className={styles.indoduction}>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed
                    Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                    Aliqua.
                </p>
                <button className={styles.viewButton}>View More</button>
            </div>
            <div className={styles.galleryImages}>
                <div className={styles.imagesContainer} ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <div
                            className={styles.imagesCard}
                            key={`galleryImage-${index + 1}`}
                        >
                            <img src={image} alt="gallery" />
                            <BsZoomIn className={styles.imageIcon} />
                        </div>
                    ))}
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
