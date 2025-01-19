import React from 'react'
import './Header.css'
import 'animate.css';
import bg from '../../images/backgrounds/bg_video.mp4'
const Header = () => {
  return (
    <div className='header'>
      
        <div className='bg-video'>
        <video autoPlay loop muted loading="lazy">
          <source src={bg} type='video/mp4'/>
        </video>
        </div>

        <div className="header-text">
            <p className='animate__animated animate__bounce'>مساكن المجدل للخدمات البترولية</p>
            <h3 className='animate__heartBeat'>ريبن</h3>
        </div>
    </div>
  )
}

export default Header
