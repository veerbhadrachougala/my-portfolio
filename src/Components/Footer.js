import "./FooterStyle.css";

import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location icons">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>#27 30th Main 2nd Cross BTM 2nd Stage, Bangalore.</p>
              {/* <p>sBangalore.</p> */}
            </div>
          </div>
          <div className="phone icons">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 8884072913
            </h4>
          </div>
          <div className="email icons">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="chougalav25@gmail.com">chougalav25@gmail.com</a>
            </h4>
          </div>
        </div>

        <div className="right">
          <div className="social">
            <div className="icons">
              <FaGithub
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="https://github.com/veerbhadrachougala">
                veerbhadrachougala
              </a>
            </div>
            <div className="icons">
              <FaLinkedin
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="https://www.linkedin.com/in/veerbhadra-chougala-639b401bb/">
                veerbhadra-chougala
              </a>
            </div>
            <div className="icons">
              <FaInstagram
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="https://www.instagram.com/vicky_chougala/">
                vicky_chougala
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
