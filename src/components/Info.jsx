import React from 'react'
import styles from '../styles/Info.module.scss'
import {getClasses} from '../untils/getClasses'

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_box}>
            <div className={styles.animation}>
                  <div className={styles.pattern}>
                      <div className={styles.car}>
                        <img src="./images/pattern/car.png" alt="car" />
                      </div>
                      <div className={styles.toggle}>
                        <div className={styles.name}>
                          <span>Old</span>
                        </div>
                        <span>2 Years</span>
                        <div className={styles.circle}></div>
                      </div>
                      <div className={styles.toggle_name}>
                         <span>outo gallery amir</span>
                        <div className={styles.circle}></div>
                      </div>
                  </div>
            </div>
            {/* // */}
            <div className={styles.content}>
              <div className={styles.container_box}>
                <div className={styles.time}>
                  <p>working time</p>
                  <p>every day</p>
                  <div className={styles.time_open}>
                    <div className={styles.open}>
                      <span> friday</span>
                      <span>10 to 2</span>
                    </div>
                    <div className={styles.open}>
                      <span>sat to fri</span>
                      <span>9 to 2</span>
                    </div>
                  </div>
                </div>
                <div className={styles.context}>
                  <div className={styles.container_boxx}>
                    <div className={styles.info}> <img src="./images/logo/phone.png" alt="" /> <span>+98 9391470427</span></div>
                    <div className={styles.info}><img src="./images/logo/insta.png" alt="" /> <span>Instagram</span></div>
                    <div className={styles.info}><img src="./images/logo/loc.png" alt="" /> <span>Iran,Tehran</span></div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Info