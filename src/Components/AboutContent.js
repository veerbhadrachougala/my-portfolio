import "./AboutContentStyle.css";

import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h2>Get to know me!</h2>
        <p>
          I'm a <strong>Frontend Web Developer</strong>  building the Front-end of Websites and Web Applications that leads to the success of the overall product.Check out some of my work in the <strong>Projects</strong> section.
        </p>
        <p>
          I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow.If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>Contact</strong> me.
        </p>
        <Link to='/Contact'>
            <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <h2>My Skills</h2>
        <ul className="skills">
            <li className="skill-list">HTML</li>
            <li className="skill-list">CSS</li>
            <li className="skill-list">JavaScript</li>
            <li className="skill-list">BOOTSTRAP</li>
            <li className="skill-list">MATERIAL UI</li>
            <li className="skill-list">React JS</li>
            <li className="skill-list">Mongo DB</li>
            <li className="skill-list">Node JS</li>
            <li className="skill-list">Express Basics</li>
            <li className="skill-list">Responsive Design</li>
            <li className="skill-list">GitHub</li>

        </ul>
      </div>
    </div>
  );
};

export default AboutContent;
