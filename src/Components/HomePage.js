import "./HomePageStyle.css";
import { Link } from "react-router-dom";
import React from "react";

// const PDF_FILE_URL = "http://localhost:3000/veerbhadra-resume.pdf";

// const PDF_FILE_URL = "https://drive.google.com/file/d/13h4bCSzQ1ui6E_inbzCvuUWeGF3MJxK2/view?usp=share_link"
const HomePage = () => {
  const onButtonClick = () => {
    // const link = document.createElement('a');
    // link.href = PDF_FILE_URL;
    // link.download = 'veerbhadra-resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);

    const url = "https://drive.google.com/file/d/13h4bCSzQ1ui6E_inbzCvuUWeGF3MJxK2/view?usp=share_link";
    const link = document.createElement('a');

    fetch(url, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(response => response.blob())
      .then(blob => {
        const fileUrl = window.URL.createObjectURL(new Blob([blob]));
        link.href = fileUrl;
        link.download = 'veerbhadra-resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  return (
    <div className="hero">
      <div className="mask">
        <div className="mask-1"></div>
      </div>
      <div className="content">
        <p>HI, I'M VEERBHADRA CHOUGALA.</p>
        <h1>Frontend Developer.</h1>
        <div>
          <Link className="btn" onClick={onButtonClick}>
            Download CV
          </Link>
          {/* <Link to="/Projects" className="btn-light">
            PROJECTS
          </Link>
          <Link to="/Contact" className="btn-light">
            CONTACT
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
