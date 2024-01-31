import React from 'react'
import './resetemail.css'
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';


function ResetEmail() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
        <h3 data-aos="fade-down">Enter your email you will <br /> receive link via your email to reset password</h3>
        <form data-aos="fade-up" action="#" method='POST' className='reset-form'>
            
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name='emailReset' className='resetinput' required/>
            <button type='submit' className='reset-send'>Send</button>
        </form>
    </div>
  )
}

export default ResetEmail