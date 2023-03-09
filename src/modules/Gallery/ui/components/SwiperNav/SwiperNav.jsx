import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import styles from "./SwiperNav.module.css"

function SwiperNav() {
    return (
        <>
            <BsChevronLeft id="prevStaff" className={styles.prev} />
            <BsChevronRight id="nextStaff" className={styles.next} />
        </>
    )
}

export default SwiperNav
