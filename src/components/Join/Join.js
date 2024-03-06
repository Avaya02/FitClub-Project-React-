import React, { useRef } from 'react'
import "./Joins.css"
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cuztgvs', 'template_o1eamzn', form.current, {
        publicKey: '7b1dvCsQl6I6T4xcU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
   <div className='Join' id='join'>
    <div className='left-j'>

    <hr/>  {/*DOUBT WHAT IS HR*/}

    <div>
        <span className='stroke-text'>READY TO</span>
        <span>LEVEL UP</span>
    </div>
    <div>
      <span>YOUR BODY</span>
      <span className='stroke-text'>WITH US?</span>
    </div>

    </div>
    <div className='right-j'>
    <form ref={form} className='email-container' onSubmit={sendEmail}>
      <input type='email' name='user_email' placeholder='Enter Your Email Address'/>
      <button className='btn btn-j'>Join Now</button>
    </form>

    </div>
   </div>
  );
};

export default Join
