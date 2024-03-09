import React from "react"
import styles from './Button.module.css'

const Button: React.FC<{children: string}> = ({children}) => {

  return (
    <button className={styles.button}>
    {children}
    </button>
  )
}

export {Button}