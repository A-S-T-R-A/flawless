/* eslint-disable jsx-a11y/alt-text */
import { HTMLAttributes, useState } from "react"
import { Skeleton } from "../Skeleton/Skeleton"
import { placeholder } from "assets/images/hero/index"
import styles from "./AsyncImage.module.css"
import { classNames } from "modules/common/helpers/classNames"

type HTMLImageAttributes = Omit<
    HTMLAttributes<HTMLImageElement>,
    "onLoad" | "className" | "onError" | "src"
>

export enum ImageFit {
    CONTAIN = "contain",
    COVER = "cover",
    NONE = "none",
    FILL = "fill",
    SCALE_DOWN = "scale-down",
}

interface AsyncImageProps extends HTMLImageAttributes {
    src?: string
    className?: string
    objectFit?: ImageFit
}

export function AsyncImage(props: AsyncImageProps) {
    const { src, className = "", objectFit = ImageFit.CONTAIN, ...otherProps } = props

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    function loadHandler() {
        setIsLoading(false)
    }

    function errorHandler() {
        setIsLoading(false)
        setIsError(true)
    }

    return (
        <div className={styles.imageContainer}>
            {isLoading && !isError && (
                <>
                    <Skeleton className={styles.placeholder} />
                    <img src={placeholder} className={styles.placeholder} />
                </>
            )}

            {!src && (
                <>
                    <Skeleton className={styles.placeholder} />
                    <img src={placeholder} className={styles.placeholder} />
                </>
            )}

            {isError && src && (
                <img
                    src={placeholder}
                    className={classNames(styles.placeholderError, {}, [className])}
                />
            )}

            <img
                onLoad={loadHandler}
                onError={errorHandler}
                className={classNames(
                    styles.mainImage,
                    {
                        [styles.opacity]: isError || src === undefined,
                        [styles[objectFit]]: src,
                    },
                    [className]
                )}
                src={src}
                {...otherProps}
            />

            <img
                src={placeholder}
                className={classNames(styles.placeholderImage, {}, [className])}
            />
        </div>
    )
}
