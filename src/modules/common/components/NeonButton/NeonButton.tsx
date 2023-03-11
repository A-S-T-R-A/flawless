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
        window.open(
            "https://shop.eventix.io/8d7ac0a3-868d-4775-9034-2be52805f254?shop_code=uvk444kw&original_referer=https%3A%2F%2Fflawlessdynasty.com%2F"
        )
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
