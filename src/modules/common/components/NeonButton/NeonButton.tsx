import { ReactNode } from "react"
import { Button, ButtonVariant } from "modules/common/Button"
import { classNames } from "modules/common/helpers/classNames"
import styles from "./NeonButton.module.css"

interface NeonButtonProps {
    children: ReactNode
    className?: string
    withGroundReflection?: boolean
}

export function NeonButton(props: NeonButtonProps) {
    const { children, className, withGroundReflection } = props

    const btnClassName = classNames(
        styles.neon,
        { [styles.withGroundReflection]: withGroundReflection },
        [className]
    )

    return (
        <Button variant={ButtonVariant.OUTLINED} className={btnClassName}>
            {children}
        </Button>
    )
}
