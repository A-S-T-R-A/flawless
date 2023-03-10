import React from "react"
import styles from "./Image.module.css"

const Image = React.memo(({ percent, image }) => {
    return (
        <img
            src={image}
            alt=""
            className={styles.img}
            draggable={false}
            style={{
                objectPosition: `${100 - percent}% center`,
            }}
        />
    )
})

export default Image
