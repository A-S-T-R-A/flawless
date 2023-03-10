import { SocialIcons } from "modules/common/components/SocialIcons"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.wrapper} id="contacts">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.phone}>
                        <a
                            className={styles.linkTitle}
                            href="https://wa.me/+32485003653"
                            target="_blank"
                            rel="noreferrer"
                        >
                            WhatsApp
                        </a>
                        <a
                            className={styles.link}
                            href="https://wa.me/+32485003653"
                            target="_blank"
                            rel="noreferrer"
                        >
                            +32 485 00 36 53
                        </a>
                    </div>
                    <div className={styles.email}>
                        <a
                            className={styles.linkTitle}
                            href="mailto:flawlessdynastybe@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Email
                        </a>
                        <a
                            className={styles.link}
                            href="mailto:flawlessdynastybe@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            flawlessdynastybe@gmail.com
                        </a>
                    </div>
                    <div className={styles.socialIcons}>
                        <SocialIcons className={styles.icons} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
