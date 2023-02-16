import './HomePageStyle.css';
import { Link } from 'react-router-dom';
import React from 'react'

export const HomePage = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <p>HI, I'M VEERBHADRA CHOUGALA.</p>
            <h1>Software developer.</h1>
            <div>
                <Link to="/Projects" className='btn'>PROJECTS</Link>
                <Link to="/ContactMe" className='btn-light'>CONTACT</Link>
            </div>
        </div>

    </div>
  )
}
