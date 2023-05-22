import { useEffect, useState } from "react"
import styles from "./VideoBg.module.css"
import { client, urlFor } from "modules/common/helpers/client"
import { getFileAsset } from "@sanity/asset-utils"

export default function VideoBg() {
    const [showVideo, setShowVideo] = useState(false)
    const [videoS, setVideoS] = useState()

    useEffect(() => {
        const query = "*[_type == 'main']"

        client.fetch(query).then(data => {
            setVideoS(data?.[0])
        })
    }, [])

    if (!videoS) return null

    const video = getFileAsset(videoS.videoFile.asset, client.config()).url
    const videoPlaceholder = urlFor(videoS.videoPlaceholder)

    return (
        <>
            <img
                src={videoPlaceholder}
                alt="videoPlaceHolder"
                onLoad={() => setShowVideo(true)}
                className={styles.img}
            />
            {showVideo && (
                <video
                    src={video}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    playsInline
                    autoPlay={true}
                    className={styles.video}
                />
            )}
        </>
    )
}
