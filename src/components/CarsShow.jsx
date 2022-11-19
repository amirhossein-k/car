import React from 'react'
import styles from '../styles/Carsshow.module.scss'
import {Data} from '../untils/Data'
import cash_logo from '../public/cash.svg'
import car_logo from '../public/carlogo.svg'
import ShowMore from './ShowMore'

const CarsShow = () => {
  return (
<>
    <div className={styles.container_product}>
      
      {
        Data.map(item=>{
          return(
            <div className={styles.pruduct} key={item.id}>
              <img src={`../images/cars/${item.image}`} />
              <p className={styles.name}>{item.name}</p>
              <div className={styles.box}>
                  <span className={styles.price}> <img src={cash_logo}/> {item.price} toman </span>
                  <span className={styles.catagory}><img src={car_logo}/> {item.catagory}</span>
              </div>
            </div>
          )
        })
      }

    </div>
    <div className={styles.more}>
      <ShowMore>Show All Cars</ShowMore>
    </div>
</>
)
}

export default CarsShow