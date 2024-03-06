import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className='Reasons' id='/sex'>
    <div className='left-r'>
    <img src={image1} alt='' className='image-one'/>
    <img src={image2} alt='' className='image-two'/>
    <img src={image3} alt='' className='image-three'/>
    <img src={image4} alt='' className='image-four'/>
    </div>
    <div className='right-r'>
        
        <span>Some Reasons</span>
     <div>
      <span className='stroke-text'>why</span><span> choose us?</span>
     </div>
        <div className='details-r'>
        <div>
          <img src={tick} alt=''/>
          <span>OVER 140+ EXPERT COACHES</span>
        </div>
        <div>
          <img src={tick} alt=''/>
          <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
        </div>
        <div>
          <img src={tick} alt=''/>
          <span>1 FREE PROGRAM FOR NEW MEMBER</span>
        </div>
        <div>
          <img src={tick} alt=''/>
          <span>RELIABLE PARTNERS</span>
        </div>
       

        </div>
       <div>

       {/* Because right-r ke andar ke span ko orange color de krha isliye orange aarha instead of gray*/}
       
       <span className='partner-class'> OUR PARTNERS</span>
       </div>
        <div className='partners'>
          <img src={nb} alt=''/>
          <img src={adidas} alt=''/>
          <img src={nike} alt=''/>
        </div>

    </div>

      
    </div>
  )
}

export default Reasons
