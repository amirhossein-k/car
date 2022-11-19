import React from 'react'
import styles from '../styles/Showmore.module.scss'
import {getClasses} from '../untils/getClasses'

const ShowMore = ({children}) => {
  return (
    <>
      <button className={getClasses([styles.button,styles.button_y20,styles.button_50])}>{children}</button>
    </>
  )
}

export default ShowMore