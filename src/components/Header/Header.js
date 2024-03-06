import React, { useState } from 'react'
import './Header.css';
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll';
import Reasons from '../Reasons/Reasons';

const Header = () => {
  {/* bars icon sirf mobile mai aegi header ki toh mobile wala
boolean variable use karke check kareenge condition*/}
const mobile = window.innerWidth <= 768 ? true : false;

const[menuOpened,setMenuOpened]= useState(false);

  return (
    <div className='header'>
    <img src={Logo} alt='' className='logo'/>

    {(menuOpened === false && mobile===true)?  (
      <div className='menu-button-ka-div'
      onClick={()=> 
      setMenuOpened(true)}>
      <img src={Bars} alt='' style={{width: '1.5rem', height:'1.5rem' }}/>

      </div>
    )
    : (
      <ul className='header-menu'>
        <li>
        <Link to='/home'
        onClick={()=> setMenuOpened(false)}
        span={true}
        smooth={true}
        
        >Home</Link> 
      
         </li>

         <li > 
        <Link onClick={()=> setMenuOpened(false)}
        to='/programs'
        span={true}
        smooth={true}
        >Programs
        </Link> </li>
        
        <li>
          <Link to='/sex'
          onClick={()=> setMenuOpened(false)}
          smooth={true}
          span={true}>
         
          Why us

          </Link>
        </li>

        <li>
          <Link to='/plans'
          onClick={()=> setMenuOpened(false)}
          smooth={true}
          span={true}>
          Plans

          </Link>
        </li>

        <li > 
        <Link onClick={()=> setMenuOpened(false)}
        to='/testimonials'
        span={true}
        smooth={true}
        >Testimonials
        </Link> </li>

    </ul>
  
    )}
    {/* <ul className='header-menu'>
        <li>Home </li>
        <li>Programs </li>
        <li>Why us </li>
        <li>Plans </li>
        <li> Testimonials </li>

    </ul>
       */}
    </div>
  )
}

export default Header
