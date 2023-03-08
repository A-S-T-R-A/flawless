import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel, Parallax, Controller } from "swiper"
import "swiper/css"
import "swiper/css/mousewheel"
import "swiper/css/controller"
import { useState } from "react"
import { classNames } from "modules/common/helpers/classNames"

interface SliderMainProps {
    controlledSwiper: any
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export function SliderMain({ controlledSwiper }: SliderMainProps) {
    const [slideOpen, setSlideOpen] = useState(-1)

    function clickHandler(i: number) {
        if (i === slideOpen) {
            setSlideOpen(-1)
        } else {
            setSlideOpen(i)
        }
    }

    return (
        <Swiper
            modules={[Mousewheel, Parallax, Controller]}
            freeMode={true}
            centeredSlides={true}
            slidesPerView={3.5}
            controller={{ control: controlledSwiper }}
            mousewheel
            parallax
            breakpoints={{
                0: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                680: {
                    slidesPerView: 3.5,
                    spaceBetween: 60,
                },
            }}
            className="slider"
        >
            {arr.map((item, index) => {
                const sliderItemClassName = classNames(
                    "slider__item",
                    {
                        slideOpen: slideOpen === index,
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
                            className="slider__img"
                            data-swiper-parallax={index % 2 ? "30%" : "20%"}
                            style={{
                                backgroundImage: `url(${require("assets/images/heroGallery/" +
                                    item +
                                    ".jpg")})`,
                            }}
                        ></div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
