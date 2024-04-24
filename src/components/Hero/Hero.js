import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'


const Hero = () => {
  const transition={type: 'spring', duration : 3}
  {/*mobile is a boolean value used for conditional statement according to which
animation of media queries will be adjusted*/}
  const mobile=window.innerWidth <= 768 ? true : false
  return (
    <div className='hero' id='/home'>
   <div className='blur hero-blur'></div>
    <div className='left-h'> 
    <Header/>
    {/*The Best ad*/}
    <div className='the-best-ad'> 
    {/* <div></div>
     */}
     
     {/*JIS DIV KO ANIMATION DENI HAI USSE MOTION.DIV SE REPLACE KARDENGE OR DIV SE PEHLE MOTION.
     LAGA DENGE
     THEN COORDINATES DEKE ANIMATION LAGA DENGE*/}
     
        <motion.div
       initial ={{left: mobile ? '170px' : '238px'}}
        whileInView={{left:'8px'}}
        transition={transition}
        >
      </motion.div>
      <span>the best fitness club in the town</span>
    </div>
    {/*Hero Ad*/}
    <div className='hero-text'>
    <div>
      <span className='stroke-text'>Shape</span>
      <span> Your</span>
    </div>
    <div>    <span>Ideal Body</span>   </div>
    <div> 
    <span> In here we will help you to shape and build your ideal body and live up your life to fullest</span>
    </div>
    </div>
    {/*figures*/}
    <div className='figures'>
    <div><span></span> <span> </span>
    </div>
    <div> 

    {/* <span>+146</span> */}
   <span>
   <NumberCounter end={140} start={100} delay='4' preFix ="+"/>
   </span>
     <span>Expert coaches</span>
     </div>
    <div>
    <span>
    <NumberCounter end={140} start={100} delay='4' preFix ="+"/>
    </span>
     <span>members joined</span>
     </div>
     <div>
    <span>
    <NumberCounter end={140} start={100} delay='4' preFix ="+"/>
    </span>
     <span>fitness programs </span>
     </div>


    </div>
    {/*hero-buttons*/}
    <div className='hero-buttons'>
      <button className='btn'>Get Started</button>
      <button className='btn' >Learn More</button>

    </div>
    </div>
    <div className='right-h'> 
    <button className='btn'>Join Now</button>
    <motion.div 
    transition={transition}
    initial= {{right: '-1rem'}}
    whileInView={{right: '4rem'}}
    className='heart-rate'>
    
      <img src={Heart} alt=''/>
      <span className='span-one'>Heart Rate</span> <span className='span-two'>116 bpm</span>
    </motion.div>
    {/* Hero images*/}
    <img src={hero_image} alt='' className='hero-image'/>
    <motion.img 

    transition={transition}
    initial={{right:'11rem'}}
    whileInView={{right:'20rem'}}

    src={hero_image_back} alt='' className='hero-image-back'/>
    {/*calories*/}
    <motion.div 

    transition={transition}
    initial= {{right:'37rem'}}
    whileInView={{right:'28rem'}}
    
    className='calories'>
      <img src={Calories} alt=''/>
      <div>
      <span>Calories Burned</span> 
      <span>220 kcal</span>
      </div>
      
    </motion.div>
    </div>


      
    </div>
  )
}

export default Hero
