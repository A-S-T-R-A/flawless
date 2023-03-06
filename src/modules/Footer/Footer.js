import { SocialIcons } from "modules/common/components/SocialIcons"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.wrapper} id="footer">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.phone}>
                        <a
                            className={styles.linkTitle}
                            href="https://wa.me/+32485003653"
                        >
                            Whatsapp
                        </a>
                        <a
                            className={styles.link}
                            href="https://wa.me/+32485003653"
                        >
                            +32 485 00 36 53
                        </a>
                    </div>
                    <div className={styles.email}>
                        <a
                            className={styles.linkTitle}
                            href="flawlessdynastybe@gmail.com"
                        >
                            Email
                        </a>
                        <a
                            className={styles.link}
                            href="flawlessdynastybe@gmail.com"
                        >
                            flawlessdynastybe@gmail.com
                        </a>
                    </div>
                </div>
                <div className={styles.socialIcons}>
                    <SocialIcons className={styles.icons} />
                </div>
            </div>
        </footer>
    )
}

export default Footer
