import React from 'react'
import InputModule from './InputModule'
import styles from '../styles/Serchbox.module.scss'

const SerchBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_box}>
      <InputModule>keyword</InputModule>
      <InputModule>All Categories</InputModule>
      <InputModule>Brand</InputModule>
      <InputModule>Fuel Type</InputModule>
      <InputModule>Status</InputModule>
      <button className={styles.button}>Search</button>
      </div>
    </div>
  )
}

export default SerchBox