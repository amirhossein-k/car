import React from 'react'
import { useRef } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'

import {Navigation,EffectFade} from 'swiper'
import x from '../public/x.jpeg'
import car from '../public/car.jpg'
import car2 from '../public/car2.jpg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import styles from '../styles/Swipper.module.scss'

const Swipper = () => {
  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)


  return (
    <div className={styles.container}>
      
      <Swiper
        modules={[Navigation,EffectFade]}
        // navigation={true}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        // effect={'fade'}
        
        speed={800}
        slidesPerView={1}
        loop
        className={styles.myswiper}

        onInit={swiper =>{
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        
        <SwiperSlide className={styles.swiperslide}>
          <img className='image' src={car} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img className='image' src={car2} alt="" />
        </SwiperSlide>
       
       <div className={styles.swiperNavPrev} ref={swiperNavPrevRef}></div>
       <div className={styles.swiperNavNext} ref={swiperNavNextRef}></div>
      </Swiper>
    </div>
  )
}

export default Swipper