import { ReactNode, ButtonHTMLAttributes, useState, useEffect } from "react"
import { Button, ButtonVariant } from "modules/common/ui/Button"
import { classNames } from "modules/common/helpers/classNames"
import styles from "./NeonButton.module.css"
import { client } from "modules/common/helpers/client"

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    withGroundReflection?: boolean
}

export function NeonButton(props: NeonButtonProps) {
    const { children, className, withGroundReflection, ...rest } = props
    const [link, setLink] = useState<any>()

    useEffect(() => {
        const query = "*[_type == 'paymentLink']"

        client.fetch(query).then(data => {
            setLink(data?.[0])
        })
    }, [])

    const btnClassName = classNames(
        styles.neon,
        { [styles.withGroundReflection]: withGroundReflection },
        [className]
    )

    function clickHandler() {
        if (!link) return
        window.open(link.link)
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
