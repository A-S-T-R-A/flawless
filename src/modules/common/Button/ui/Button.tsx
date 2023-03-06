import React, { ReactElement, ReactNode } from "react"
import { ButtonHTMLAttributes } from "react"
import { classNames } from "modules/common/helpers/classNames"

import styles from "./Button.module.css"

export enum ButtonVariant {
    CLEAR = "clear",
    OUTLINED = "outlined",
    FILLED = "filled",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    variant: ButtonVariant
    isAlt?: Boolean
}

export function Button(props: ButtonProps): ReactElement {
    const {
        className,
        children,
        variant = ButtonVariant.FILLED,
        isAlt = false,
        ...otherProps
    } = props

    const btnClassName = classNames(styles.button, { [styles.alt]: isAlt }, [
        className,
        styles[variant],
    ])

    return (
        <button type="button" className={btnClassName} {...otherProps}>
            {children}
        </button>
    )
}
