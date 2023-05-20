import { Fragment, useState, useEffect } from "react"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import ModalImage from "../ModalImage/ModalImage"
import styles from "./ImagesGallery.module.css"
import { useAos } from "modules/common/helpers/useAOS"
import { client, urlFor } from "modules/common/helpers/client"

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
    useAos()

    const [gallery, setGallery] = useState()

    useEffect(() => {
        const query = "*[_type == 'gallery']"

        client.fetch(query).then(data => {
            setGallery(data)
        })
    }, [])

    if (!gallery) return null

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
                {gallery.map((image, index) => {
                    const img = urlFor(image.imageUrl).url()
                    return (
                        <Fragment key={index}>
                            <ModalImage
                                opened={imageOpen === index}
                                onClose={() => setImageOpen(-1)}
                                image={img}
                            />
                            <img
                                key={index}
                                src={img}
                                alt="img"
                                className={styles.img}
                                draggable={false}
                                style={{
                                    objectPosition: `${
                                        100 - (index % 2 ? percent * 0.8 : percent)
                                    }% center`,
                                }}
                                onMouseUp={e => onImageOpen(e, index)}
                            />
                        </Fragment>
                    )
                })}
            </div>
            <div className={styles.imagesArrows}>
                <BsArrowLeftShort className={styles.arrowIcon} onClick={() => scroll("left")} />
                <BsArrowRightShort className={styles.arrowIcon} onClick={() => scroll("right")} />
            </div>
        </div>
    )
}

export default ImagesGallery
