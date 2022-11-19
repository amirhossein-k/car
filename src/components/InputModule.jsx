import React from 'react'
import styles from '../styles/Input.module.scss'


const InputModule = ({children}) => {
  return (
    <>
      <input className={styles.inputstyle} type="text" placeholder={children} />
    </>
  )
}

export default InputModule