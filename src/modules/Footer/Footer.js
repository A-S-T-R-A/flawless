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
                            href="skype:live:artur0503915024"
                        >
                            Whatsapp
                        </a>
                        <a
                            className={styles.link}
                            href="skype:live:artur0503915024"
                        >
                            Flawless Phone Number
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
                    <div className={styles.socialIcons}>
                        <SocialIcons className={styles.icons} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
