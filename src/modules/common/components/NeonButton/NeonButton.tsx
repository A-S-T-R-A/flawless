import { ReactNode, ButtonHTMLAttributes } from "react"
import { Button, ButtonVariant } from "modules/common/ui/Button"
import { classNames } from "modules/common/helpers/classNames"
import styles from "./NeonButton.module.css"

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    withGroundReflection?: boolean
}

export function NeonButton(props: NeonButtonProps) {
    const { children, className, withGroundReflection, ...rest } = props

    const btnClassName = classNames(
        styles.neon,
        { [styles.withGroundReflection]: withGroundReflection },
        [className]
    )

    function clickHandler() {
        window.open("https://eventix.shop/dbuqe29x")
    }

    return (
        <Button
            variant={ButtonVariant.OUTLINED}
            className={btnClassName}
            onClick={clickHandler}
            {...rest}
        >
            {children}
        </Button>
    )
}
