import React from "react";

import "./aboutpage.css";

const Aboutpage = () => {
  return (
    <div className="aboutpagesec">
      <div className="aboutpagecon">
        <h1>About</h1>
        <span>Home > About </span>
      </div>
      <div className="aboutpagediv">
        <div className="aboutimg"></div>

        <div className="aboutpageinfo">
          <h1>LoanMoney</h1>
          <h3>However, there is much more to branding than</h3>
          <p>
            Unfortunately, many graphic design firms who position themselves as
            advertising agencies believe that branding your corporate identity
            is all about developing great looking visual solutions.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
      <div className="aboutsmallinfos">
        <div className="aboutsmallinfo">
          <h1>Our Vision</h1>
          <p>
            The modern world is in a continuous movement and people everywhere
            are looking for quick, safe means of accessing accurate information.
            Prompt information is vital for people who want to keep the
          </p>
        </div>
        <div className="aboutsmallinfo">
          <h1>Our Mission</h1>
          <p>
            The modern world is in a continuous movement and people everywhere
            are looking for quick, safe means of accessing accurate information.
            Prompt information is vital for people who want to keep the
          </p>
        </div>
        <div className="aboutsmallinfo">
          <h1>Our Value</h1>
          <p>
            The modern world is in a continuous movement and people everywhere
            are looking for quick, safe means of accessing accurate information.
            Prompt information is vital for people who want to keep the
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
