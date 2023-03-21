import './HomePageStyle.css';
import { Link } from 'react-router-dom';
import React from 'react'

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '../Photos/Veerbhadra-Resume.pdf';
  link.download = 'Veerbhadra-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

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
                  <Link to="/Projects" className='btn' onClick={downloadResume}>Download CV</Link>
                  {/* <Link to="/Contact" className='btn-light'>CONTACT</Link> */}
              </div>
          </div>

      </div>
  )
}

export default HomePage;
