import React from "react";
import './HomePageStyle.css';

import { Link } from 'react-router-dom';

const AfterSubmit = () => {
  return (
    <div className="hero">
      <div className="mask">
        <div className="mask-1"></div>
      </div>
      <div className="content">
        {/* <p>You have suce</p> */}
        <h1>Thank you...</h1>
        <div>
          <Link to="/" className="btn-light">
            Back to HomePage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AfterSubmit;
