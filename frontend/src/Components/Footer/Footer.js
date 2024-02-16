import React from "react";
import "./Footer.css";
import footerLogo from "../Assets/C033.webp";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoTwitch } from "react-icons/io5";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo" to="/">
        <img src={footerLogo} alt="" />
        <p>O'CLOCK</p>
      </div>
      <ul className="footer__links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer__social__icon">
        <FaInstagram size={34} className="footer__icons__container" />
        <FaWhatsapp size={34} className="footer__icons__container" />
        <IoLogoTwitch size={34} className="footer__icons__container" />
      </div>
      <div className="footer__copyright">
        <hr />
        <p>Copyright @ 2023 - ALL </p>
      </div>
    </div>
  );
}

export default Footer;
