import './HomePageStyle.css';
import { Link } from 'react-router-dom';
import React from 'react'

const HomePage = () => {
  return (
      <div className='hero'>
        <div className='mask'>
          <div className='mask-1'>

          </div>
        </div>
          <div className='content'>
              <p>HI, I'M VEERBHADRA CHOUGALA.</p>
              <h1>Frontend Developer.</h1>
              <div>
                  <Link to="/Projects" className='btn'>PROJECTS</Link>
                  <Link to="/Contact" className='btn-light'>CONTACT</Link>
              </div>
          </div>

      </div>
  )
}

export default HomePage;
