import { AnimatedModal } from "modules/common/ui/AnimatedModal"
import styles from "./ModalImage.module.css"

function ModalImage({ opened, image, onClose }) {
    return (
        <AnimatedModal
            opened={opened}
            onClose={onClose}
            innerClassName={styles.modalImgContainer}
        >
            <img
                src={image}
                alt="img"
                className={styles.modalImg}
                draggable={false}
                onClick={onClose}
            />
        </AnimatedModal>
    )
}

export default ModalImage
