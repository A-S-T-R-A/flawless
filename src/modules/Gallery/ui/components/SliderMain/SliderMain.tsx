import { useState } from "react"
import styles from "./SliderMain.module.css"
import { classNames } from "modules/common/helpers/classNames"
import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel, Parallax, Controller } from "swiper"
import "swiper/css"
import "swiper/css/mousewheel"
import "swiper/css/controller"
import "swiper/css/free-mode"
import { gallerySlidesUrl } from "../../../data/gallerySlidesUrl"

interface SliderMainProps {
    controlledSwiper: any
}

export function SliderMain({ controlledSwiper }: SliderMainProps) {
    const [slideOpen, setSlideOpen] = useState(-1)

    function clickHandler(i: number) {
        if (i === slideOpen) {
            setSlideOpen(-1)
        } else {
            setSlideOpen(i)
        }
    }

    function swiperChangeHandler(swiper: any) {
        setSlideOpen(-1)
    }

    return (
        <Swiper
            modules={[Mousewheel, Parallax, Controller]}
            freeMode={{ enabled: true }}
            slidesPerView={3.5}
            controller={{ control: controlledSwiper }}
            mousewheel={{ sensitivity: 3 }}
            parallax
            breakpoints={{
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                480: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
                650: { centeredSlides: true },
                960: {
                    centeredSlides: true,
                    slidesPerView: 3.5,
                    spaceBetween: 60,
                },
            }}
            onSlideChange={swiper => swiperChangeHandler(swiper)}
            className={styles.slider}
        >
            {gallerySlidesUrl.map((item, index) => {
                const sliderItemClassName = classNames(
                    styles.sliderItem,
                    {
                        [styles.slideOpen]: slideOpen === index,
                    },
                    []
                )
                return (
                    <SwiperSlide
                        className={sliderItemClassName}
                        key={index}
                        onClick={() => clickHandler(index)}
                    >
                        <div
                            className={styles.sliderImage}
                            data-swiper-parallax={index % 2 ? "30%" : "20%"}
                            style={{
                                backgroundImage: `url(${require("assets/images/gallery" +
                                    item)})`,
                            }}
                        ></div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
