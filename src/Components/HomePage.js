import './HomePageStyle.css';
import { Link } from 'react-router-dom';
import React from 'react';
import '../Photos/veerbhadra-resume.pdf'


// Function will execute on click of button
const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('veerbhadra-resume.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'veerbhadra-resume.pdf';
          alink.click();
      })
  })
}

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
                  <Link className='btn' onClick={onButtonClick}>Download CV</Link>
                  {/* <Link to="/Contact" className='btn-light'>CONTACT</Link> */}
              </div>
          </div>

      </div>
  )
}

export default HomePage;
