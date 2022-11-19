import React from 'react'
import {Data} from '../untils/Data'
import styles from '../styles/Rowcar.module.scss'

const Rowcar = () => {
  return (
    <div className={styles.container_product}>
      
      {
        Data.map(item=>{
          return(
            <div className={styles.pruduct} key={item.id}>
              <img src={`../images/cars/${item.image}`} />
              <h4>{item.name}</h4>
              <p>{item.price} toman</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Rowcar