import React from "react";
import "./css/footer.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    
    <div className="footer">
      <div className="footer__content">
        <ul>
          <li>
            <a href="# ">News</a>
          </li>
          <li>
            <a href="# ">Contact</a>
          </li>
          <li>
            <a href="# ">Privacy Policy</a>
          </li>
          <li>
            <a href="# ">Terms of use</a>
          </li>
          <li>
            <a href="# ">Site Map</a>
          </li>
        </ul>
        <div className="footer__icons">
          <div className="footer__icon">
            <FaFacebookSquare color="white" />
          </div>
          <div className="footer__icon">
            <FaTwitter color="white" />
          </div>
          <div className="footer__icon">
            <FaInstagram color="white" />
          </div>
          <div className="footer__icon">
            <FaLinkedin color="white" />
          </div>
        </div>
      </div>
      <p>Copyright © 2020 CaraSeed. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
