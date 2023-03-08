import styles from "./Hero.module.css"

export function Hero() {
    return (
        <div className={styles.description}>
            <div className={styles.logo}>Miami</div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, deleniti nisi maxime ipsa temporibus obcaecati totam
                recusandae illo minus. Placeat nulla iusto illum nemo voluptas
                doloremque ab similique cupiditate rerum.
            </p>
        </div>
    )
}
