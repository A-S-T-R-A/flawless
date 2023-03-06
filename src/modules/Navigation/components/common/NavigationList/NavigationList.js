import React from "react"
import styles from "./NavigationList.module.css"
import { NavigationLink } from "../NavigationLink"

export function NavigationList({ closeClickHandler, menuData }) {
    return (
        <ul className={styles.list}>
            {menuData.map(item => {
                return (
                    <NavigationLink
                        key={item.id}
                        link={item.link}
                        onClick={closeClickHandler}
                    >
                        {item.text}
                    </NavigationLink>
                )
            })}
        </ul>
    )
}
