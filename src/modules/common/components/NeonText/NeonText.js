import styles from "./NeonText.module.css"
import { classNames } from "modules/common/helpers/classNames"

function NeonText({ children, className }) {
    return (
        <span className={classNames(styles.neonText, {}, [className])}>
            {children}
        </span>
    )
}

export default NeonText
