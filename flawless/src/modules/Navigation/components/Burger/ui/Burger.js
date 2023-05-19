import { useEffect, useState } from "react"
import styles from "./Burger.module.css"
import { BurgerIcon } from "./BurgerIcon"
import { BurgerNav } from "./BurgerNav"

export function Burger() {
    const [showBurger, setShowBurger] = useState(false)

    useEffect(() => {
        document.body.style.overflow = showBurger ? "hidden" : ""
    }, [showBurger])

    function clickHandler(e) {
        e.stopPropagation()
        setShowBurger(false)
    }

    return (
        <div
            className={showBurger ? styles.wrapper : styles.displayNone}
            onClick={clickHandler}
        >
            <BurgerIcon showBurger={showBurger} setShowBurger={setShowBurger} />
            <BurgerNav showBurger={showBurger} setShowBurger={setShowBurger} />
        </div>
    )
}
