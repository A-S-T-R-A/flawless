import React, { ReactElement, useState, useEffect, useMemo } from "react"
import styles from "./SocialIcons.module.css"
import { classNames } from "modules/common/helpers/classNames"
import { client } from "modules/common/helpers/client"
import { reformatData } from "modules/common/helpers/reformatData"

interface SocialIconsProps {
    className?: string
}

interface SocialItemProps {
    socialAdresses: string
    socialIcons: string
}

export function SocialIcons({ className }: SocialIconsProps) {
    const [socials, setSocials] = useState<SocialItemProps>()

    useEffect(() => {
        const query = "*[_type == 'contacts']"

        client.fetch(query).then(data => {
            setSocials(data?.[0])
        })
    }, [])

    const socialsData = useMemo(
        () => socials && reformatData(socials.socialIcons, socials.socialAdresses),
        [socials]
    )
    const containerClassName = classNames(styles.socials, {}, [className])

    if (!socialsData) return null

    return (
        <div className={containerClassName}>
            {socialsData.map((item: any, index: any) => {
                return (
                    <a
                        key={index}
                        className={styles.item}
                        href={item.text}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={item.icon} alt="" />
                    </a>
                )
            })}
        </div>
    )
}
