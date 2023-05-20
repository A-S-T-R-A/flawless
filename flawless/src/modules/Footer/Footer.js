import { SocialIcons } from "modules/common/components/SocialIcons"
import styles from "./Footer.module.css"
import { useEffect, useState } from "react"
import { client } from "modules/common/helpers/client"

function Footer() {
    const [contacts, setContacts] = useState()

    useEffect(() => {
        const query = "*[_type == 'contacts']"

        client.fetch(query).then(data => {
            setContacts(data[0])
        })
    }, [])

    if (!contacts) return null

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
                            {contacts.phone}
                        </a>
                    </div>
                    <div className={styles.email}>
                        <a
                            className={styles.linkTitle}
                            href="mailto:flawlessdynasty.be@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Email
                        </a>
                        <a
                            className={styles.link}
                            href="mailto:flawlessdynasty.be@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {contacts.email}
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
