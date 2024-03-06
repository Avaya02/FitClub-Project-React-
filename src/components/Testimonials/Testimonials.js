import React, { useState } from 'react'
import './Testimonials.css'
import '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import  rightArrow  from '../../assets/rightArrow.png'
import { testimonialsData } from '../../data/testimonialsData';
import {motion} from 'framer-motion'
import { type } from '@testing-library/user-event/dist/type'


const Testimonials = () => {
  const transition= { type : "spring",duration : 3};
  const[selected,setSelected]=useState(0);
  const tLength=testimonialsData.length;



  return (
  <div className='Testimonials' id='/testimonials' >
    <div className='left-t'>
      <span>Testimonials</span>
      <span className='stroke-text'>What they </span>
      <span>say about us</span>

      <motion.span
      key={selected}
      transition={transition}
      initial={{opacity:0, x: -100}}
      animate={{opacity:1, x: 0}}
      exit={{opacity:0, x: 100}}
      >
        {testimonialsData[selected].review}
        
      </motion.span>
      <span>
        <span style={{color: 'var(--orange)'}}>
          {testimonialsData[selected].name}
        </span>
           -{testimonialsData[selected].status}
      </span>

    </div>
    <div className='right-t'>
    {/*YEH DONO DIV IMAGE KE BACKGROUND WALE FRAMES KE LIY*/}
    <motion.div
    initial={{opacity:0 , x:-100}} /* x axis pe -100 pe hoga initially*/
    transition={{ ...transition, duration:2}}
    whileInView={{opacity:1, x:0}} /* x axis pe 0 hojaega view ke time-- 0 means original position*/
    ></motion.div>
   <motion.div
    initial={{opacity:0 , x:100}} 
    transition={{ ...transition, duration:2}}
    whileInView={{opacity:1, x:0}}
    ></motion.div>

    <motion.img src={testimonialsData[selected].image} alt=''
      key={selected}
      initial={{opacity:0,x:100}}
      animate={{opacity:1,x:0}} 
      exit={{opacity:0,x:-100}} 
      transition={transition}
    />

    <div className='arrows'>
    {/*LOGIC FOR LEFT ARROW*/}
    <img 
    onClick={()=>{
      selected===0
      ? setSelected(tLength-1)  /*Agar pehle pe hogi toh last image pe lejaega*/
      : setSelected((prev)=>
      prev-1 );
    }}
    src={leftArrow} alt=''/>

    {/*LOGIC FOR RIGHT ARROW*/}
    <img 
    onClick={()=>{
      selected===tLength-1
      ? setSelected(0)
      : setSelected((prev) =>
        prev+1 );
      
    }}

    src={rightArrow} alt=''/>

    </div>

    </div>
  </div>

      
   
  );
};

export default Testimonials
