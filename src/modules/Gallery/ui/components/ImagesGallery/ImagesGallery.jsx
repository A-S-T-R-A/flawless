import { useEffect } from "react"
import { Fragment } from "react"
import { galleryImages } from "../../../index"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import ModalImage from "../ModalImage/ModalImage"
import Aos from "aos"
import "aos/dist/aos.css"
import styles from "./ImagesGallery.module.css"

function ImagesGallery({
    percent,
    scrollRef,
    onScrollX,
    mouseDownHandler,
    onImageOpen,
    scroll,
    imageOpen,
    setImageOpen,
}) {
    useEffect(() => {
        Aos.init({ duration: 2000 }, [])
    })

    return (
        <div
            className={styles.galleryImages}
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-once
        >
            <div
                className={styles.imagesContainer}
                ref={scrollRef}
                onScroll={onScrollX}
                onMouseDown={mouseDownHandler}
            >
                {galleryImages.map((image, index) => {
                    return (
                        <Fragment key={index}>
                            <ModalImage
                                opened={imageOpen === index}
                                onClose={() => setImageOpen(-1)}
                                image={image}
                            />
                            <img
                                key={index}
                                src={image}
                                alt="img"
                                className={styles.img}
                                draggable={false}
                                style={{
                                    objectPosition: `${
                                        100 -
                                        (index % 2 ? percent * 0.8 : percent)
                                    }% center`,
                                }}
                                onMouseUp={e => onImageOpen(e, index)}
                            />
                        </Fragment>
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
    )
}

export default ImagesGallery
