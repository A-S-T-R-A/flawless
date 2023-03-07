import React, { useRef } from "react"

import {
    BsInstagram,
    BsArrowLeftShort,
    BsArrowRightShort,
} from "react-icons/bs"

import { SubHeading } from "/components/SubHeading"
import { images } from "/assets/constants"

import "./Gallery.css"

const galleryImages = [
    images.gallery1,
    images.gallery2,
    images.gallery3,
    images.gallery4,
]

function Gallery() {
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
        <div className="app__gallery flex__center">
            <div className="app__gallery-content">
                <SubHeading title="Instagram" />
                <h1 className="headtext__cormorant">Photo Gallery</h1>
                <p
                    className="p__opensans"
                    style={{ color: "#AAA", marginTop: "2rem" }}
                >
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed
                    Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                    Aliqua.
                </p>
                <button className="custom__button">View More</button>
            </div>
            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <div
                            className="app__gallery-images_card flex__center"
                            key={`gallery_image-${index + 1}`}
                        >
                            <img src={image} alt="gallery" />
                            <BsInstagram className="gallery__image-icon" />
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort
                        className="gallery__arrow-icon"
                        onClick={() => scroll("left")}
                    />
                    <BsArrowRightShort
                        className="gallery__arrow-icon"
                        onClick={() => scroll("right")}
                    />
                </div>
            </div>
        </div>
    )
}

export default Gallery
