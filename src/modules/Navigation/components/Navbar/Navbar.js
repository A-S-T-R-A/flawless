import styles from "./Navbar.module.css"
import { menuData } from "../../data"

import { NavigationList } from "../common"
import { SocialIcons } from "modules/common/components/SocialIcons"

export function Navbar() {
    return (
        <div className={styles.navBar}>
            <NavigationList menuData={menuData} />
            <SocialIcons className={styles.icons} />
        </div>
    )
}
