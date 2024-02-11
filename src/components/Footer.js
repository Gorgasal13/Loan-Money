import React from "react";

import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerdiv" id="firstchild">
        <h2>LoanMoney</h2>
        <p>
          Please remember though that how far you go is up to you. There is no
          substitute for your own work and effort in succeeding in this
          business.
        </p>
      </div>
      <div className="footerdiv">
        <h2>Services</h2>
        <span>Personal Loans</span>
        <span>Business Loans</span>
        <span>Online Cash Loans</span>
        <span>Cash Advance</span>
      </div>

      <div className="footerdiv">
        <h2>Socials</h2>
        <div className="footericon">
          <FaFacebook color="gray" size={20} />
          <span>Facebook</span>
        </div>
        <div className="footericon">
          <FaInstagram size={20} color="gray" />
          <span>Instagram</span>
        </div>
        <div className="footericon">
          <FaTwitter size={20} color="gray" />
          <span>Twitter</span>
        </div>
        <div className="footericon">
          <FaSkype size={20} color="gray" />
          <span>Skype</span>
        </div>
      </div>

      <div className="footerdiv" id="lastchild">
        <h2>Open Hours</h2>
        <p>We work all days a week, Please contact us for any inquiry.</p>
        <span>Monday - Friday: 11:00 am - 8:00 pm</span>
        <span>Saturday: 10:00 am - 6:00 pm</span>
        <span> Sunday: 11:00 am - 6:00 pm</span>
      </div>
    </footer>
  );
};

export default Footer;
