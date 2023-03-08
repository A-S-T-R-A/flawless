import { Swiper, SwiperSlide } from "swiper/react"
import { Parallax, Controller } from "swiper"
import "swiper/css"

interface SliderBgProps {
    setControlledSwiper: any
}

export function SliderBg({ setControlledSwiper }: SliderBgProps) {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <Swiper
            onSwiper={setControlledSwiper}
            modules={[Parallax, Controller]}
            centeredSlides={true}
            parallax
            slidesPerView={3.5}
            spaceBetween={60}
            className="slider_bg"
        >
            {arr.map((item, index) => (
                <SwiperSlide className="slider__item" key={index}>
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
            ))}
        </Swiper>
    )
}
