import { imagesData } from "modules/Gallery/data/imagesData"
import styles from "./ImagesList.module.css"

interface ImagesListProps {
    percentageScrolled: number
}

export function ImagesList({ percentageScrolled }: ImagesListProps) {
    return (
        <>
            {imagesData.map((url, index) => (
                <img
                    key={index}
                    src={url}
                    alt=""
                    className={styles.img}
                    style={{
                        objectPosition: `${100 + percentageScrolled}% center`,
                    }}
                    draggable={false}
                />
            ))}
        </>
    )
}
