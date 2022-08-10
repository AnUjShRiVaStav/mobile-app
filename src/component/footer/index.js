import React, { useState } from 'react'
import './style.css'
import home from '../../assets/Home.svg'
import search from '../../assets/Search.svg'
import filter from '../../assets/Filter.svg'
import add_user from '../../assets/User_add.svg'

export default function Footer() {

   const [isActive, setIsActive]  = useState(false);
   const handleClick = () => {
    setIsActive(isActive);
   }  


  return (
    <div className="footer">
    <div className='footer_content' >

      <div className={`${ !isActive && 'active'}`} onClick={handleClick} >
        <img className='img_tag' src={home} alt="home" />
      </div>
      <div className={`${ isActive && 'active'}`} onClick={handleClick} >
        <img src={filter} alt="home" />
      </div>
      <div className={`${ isActive && 'active'}`} onClick={handleClick} >
        <img src={search} alt="home" />
      </div>
      <div className={`${ isActive && 'active'}`} onClick={handleClick} >
        <img src={add_user} alt="home" />
      </div>
    </div>
    </div>
  )
}
