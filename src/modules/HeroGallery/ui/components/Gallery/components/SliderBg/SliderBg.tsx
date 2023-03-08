import styles from "./SliderBg.module.css"
import { gallerySlidesUrl } from "../../../../../data/gallerySlidesUrl"
import { Swiper, SwiperSlide } from "swiper/react"
import { Parallax, Controller } from "swiper"
import "swiper/css"

interface SliderBgProps {
    setControlledSwiper: any
}

export function SliderBg({ setControlledSwiper }: SliderBgProps) {
    return (
        <Swiper
            onSwiper={setControlledSwiper}
            modules={[Parallax, Controller]}
            centeredSlides={true}
            parallax
            slidesPerView={3.5}
            spaceBetween={60}
            className={styles.sliderBg}
        >
            {gallerySlidesUrl.map((item, index) => (
                <SwiperSlide className={styles.sliderItem} key={index}>
                    <div
                        className={styles.sliderImage}
                        data-swiper-parallax={index % 2 ? "30%" : "20%"}
                        style={{
                            backgroundImage: `url(${require("assets/images/gallery" +
                                item)})`,
                        }}
                    ></div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
