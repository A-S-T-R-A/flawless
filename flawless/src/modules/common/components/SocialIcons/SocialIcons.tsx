import React, { ReactElement } from "react"
import styles from "./SocialIcons.module.css"
import { socialsData } from "./index"
import { classNames } from "modules/common/helpers/classNames"

interface SocialIconsProps {
    className?: string
}

interface SocialItemProps {
    id: number
    link: string
    icon: ReactElement
}

export function SocialIcons({ className }: SocialIconsProps) {
    const containerClassName = classNames(styles.socials, {}, [className])
    return (
        <div className={containerClassName}>
            {socialsData.map((item: SocialItemProps, index: number) => {
                return (
                    <a
                        key={index}
                        className={styles.item}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {item.icon}
                    </a>
                )
            })}
        </div>
    )
}
