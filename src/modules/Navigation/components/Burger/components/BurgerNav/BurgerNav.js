import React, { useState, useEffect } from "react"
import { menuData } from "../../../../data"
import { BurgerCta } from "../"
import { NavigationList } from "../../../common"
import styles from "./BurgerNav.module.css"

export function BurgerNav({ showBurger, setShowBurger }) {
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        function handleResize() {
            setHeight(window.innerHeight)
        }

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    function menuClickHandler(e) {
        e.stopPropagation()
    }

    function closeClickHandler() {
        setTimeout(() => {
            setShowBurger(false)
        }, 20)
    }

    return (
        <div
            className={`${styles.overlay} ${showBurger ? styles.navOpen : ""}`}
            onClick={closeClickHandler}
        >
            <div className={styles.wrapper} onClick={menuClickHandler}>
                <div
                    className={styles.container}
                    style={{ height: `${height}px` }}
                >
                    <NavigationList
                        closeClickHandler={closeClickHandler}
                        menuData={menuData}
                    />
                    <BurgerCta closeClickHandler={closeClickHandler} />
                </div>
            </div>
        </div>
    )
}
