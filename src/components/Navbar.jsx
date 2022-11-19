import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import logo from '../public/logo.png'
import styles from '../styles/Navbar.module.scss'
import {getClasses} from '../untils/getClasses'

const Navbar = () => {

const [navbar,setNavbar] = useState(false)
const changebackground = () =>{
      console.log(window.scrollY);
      if( window.scrollY >= 80 && window.scrollY < 1000 ){
            setNavbar(true)
      }else{
            setNavbar(false)
      }
      
}

window.addEventListener("scroll", changebackground)
  return (
    
      <div className={ navbar ? getClasses([styles.navbar,styles.active]) : styles.navbar }>
            <div className={styles.navbar_container}>
                  <div className={styles.navbar_box}>
                        <div className={getClasses([styles.box,styles.box__brand])}><a href="#h"><img src={logo}/></a></div>
                        <div className={styles.box}><a href="#f">Home</a></div>
                        <div className={styles.box}><a href="#f">Product</a></div>
                        <div className={styles.box}><a href="#f">About</a></div>
                        <div className={styles.box}><a href="#f">page5</a></div>
                        <div className={styles.box}><a href="#f">Login</a></div>
                        <div className={styles.box}><a href="#f">page7</a></div>
                  </div>
            </div>
            
      </div>
    
  )
}


export default Navbar