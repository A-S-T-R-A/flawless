import styles from "./NavigationList.module.css"
import { NavigationLink } from "../NavigationLink"
import { classNames } from "modules/common/helpers/classNames"

export function NavigationList({ closeClickHandler, menuData, className }) {
    const classNameList = classNames(styles.list, {}, [className])

    return (
        <ul className={classNameList}>
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
