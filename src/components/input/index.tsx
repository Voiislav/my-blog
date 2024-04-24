import type { HTMLProps } from "react"
import clsx from "clsx"
import styles from "./index.module.css"

export type InputProps = HTMLProps<HTMLInputElement>

export function Input({ className, ...restProps }: InputProps) {
    return (
        <input className={clsx(styles.wrapper, className)} {...restProps} />
    )
}