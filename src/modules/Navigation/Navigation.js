import { useState, useEffect } from "react"
import styles from "./Navigation.module.css"
import { Burger } from "./components/Burger"
import { Navbar } from "./components/Navbar"
import { classNames } from "modules/common/helpers/classNames"

export function Navigation() {
    const [navbarVisible, setNavbarVisible] = useState(false)

    useEffect(() => {
        function scrolled() {
            window.scrollY > 11
                ? setNavbarVisible(true)
                : setNavbarVisible(false)
        }
        window.addEventListener("scroll", scrolled)
        return () => {
            window.removeEventListener("scroll", scrolled)
        }
    }, [])

    const wrapperClassName = classNames(
        styles.wrapper,
        { [styles.isScrolled]: navbarVisible },
        []
    )
    return (
        <div className={wrapperClassName}>
            <div className={styles.container}>
                <div
                    className={classNames(
                        styles.logoContainer,
                        { [styles.logoScale]: navbarVisible },
                        []
                    )}
                >
                    FLAWLESS
                </div>
                <Navbar />
                <Burger />
            </div>
        </div>
    )
}
