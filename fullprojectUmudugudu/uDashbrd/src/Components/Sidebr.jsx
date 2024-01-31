
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { RiGuideLine } from "react-icons/ri";
import { SiGoogleforms } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";




function Sidebar({children}) {
 

  const menuItem=[

  
    
    {

      path:"/Guideline",
      name:"Guidelines",
      icon:<RiGuideLine />

    },

     
    {

      path:"/CitizenForm",
      name:"Forms to collect data",
      icon:<SiGoogleforms />

    },

       
  ]

  const logout = () => {
    localStorage.clear();
    window.location.href = "http://localhost:5174/login";
  };

  //button js handler
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    if (confirmLogout) {
      // Redirect to the login page
      logout();
      // Replace '/login' with your actual login page URL
      //   <Link to="/test">Go to Login Page</Link>
    }
    // If the user clicks "Cancel" in the confirmation dialog, do nothing
  };
  return (
    <>
      <div className='user-container'>
        <div className="user-sidebar">
          <div className="user-top-section">
            <div className="user-logo">
            
            <div className='user-icoo'>
              <img src="/motto.png" alt="" />
              {/* <FaRegUser size={60} /> */}
              </div>
            </div><br /><br /><br />
         
            {
        menuItem.map((item, index)=>(
          <Link to={item.path} key={index} className="user-link" activeclassName="active">
            <div className="user-icon">{item.icon}</div>
            <div className="user-link-text">{item.name}</div>
            </Link>
        ))
       }
         
          </div>

          <div>
        
        <input 
        type="button" 
        value="Logout" 
        className='user-btn' 
        onClick={handleLogout}
        />
      </div>
        </div>
      
        <main>{children}</main>

      </div>

    
      
  </>
  )
}

export default Sidebar