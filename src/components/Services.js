import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section className="sersec">
      <div className="sercon">
        <h1>Main Loan Services</h1>
        <span>Home > Features > Services </span>
      </div>
      <div className="serdiv">
        <div id="first">
          <div className="sersmalldiv">
            <div className="backdiv" id="backdivone"></div>
            <h2 className="backtitle">
              <strong>01.</strong> Car Loan
            </h2>
            <span className="backspan">Read more</span>
          </div>
          <div className="sersmalldiv">
            <div className="backdiv" id="backdivtwo"></div>
            <h2 className="backtitle">
              <strong>03.</strong>Business Loan
            </h2>
            <span className="backspan">Read more</span>
          </div>
          <div className="sersmalldiv">
            <div className="backdiv" id="backdivthree"></div>
            <h2 className="backtitle">
              <strong>05.</strong>Home Loan
            </h2>
            <span className="backspan">Read more</span>
          </div>
        </div>
        <div id="two">
          <div className="sersmalldiv">
            <div className="backdiv" id="backdivfour"></div>
            <h2 className="backtitle">
              <strong>02.</strong>Education Loan
            </h2>
            <span className="backspan">Read more</span>
          </div>
          <div className="sersmalldiv">
            <div className="backdiv" id="backdivfive"></div>
            <h2 className="backtitle">
              <strong>04.</strong>Credit & Debit Card
            </h2>
            <span className="backspan">Read more</span>
          </div>
          <div className="sersmalldiv">
            <div className="backdiv" id="backdivsix"></div>
            <h2 className="backtitle">
              <strong>06.</strong>Health & Medical
            </h2>
            <span className="backspan">Read more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
