import React from 'react'
import styled from 'styled-components'
import CarsShow from './components/CarsShow'
import Info from './components/Info'
import Navbar from './components/Navbar'
import Rowcar from './components/Rowcar'
import SerchBox from './components/SerchBox'
import Swipper from './components/Swipper'




const App = () => {
  return (

      <MainBody>
        <Navbar/>
        <Swipper/>
        <SerchBox/>
        <Rowcar/>
        <CarsShow/>
        <Info/>
      </MainBody>
    
    
  )
}
const MainBody = styled.section`
width: 100%;
min-height: 100vh;
scroll-snap-type: y mandatory;
position: relative;

`;
export default App