import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Landinguser() {

    useEffect(() => {
        AOS.init({duration: 1000});
      }, []);
  return (

    <>
    <div className='user-landing'>
      <h2 data-aos="fade-down" className='h2-user'>WELCOME TO </h2>
        <br />
        <br />
        <br />
         <h1 data-aos="fade-up" className='h1-user'>UMUDUGUDU-HUB </h1>
    </div>

    </>
  )
}

export default Landinguser
