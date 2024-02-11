import React from "react";

import "./contactus.css";

const Contactus = () => {
  return (
    <section className="contactussec">
      <div className="aboutpagecon">
        <h1>Contact us</h1>
        <span>Home > Contact </span>
      </div>
      <div className="contactusdiv">
        <h1>Get In Touch</h1>
        <span>Please contact us or send us an email or go to our forum.</span>
        <form className="contactform">
          <div className="firstinputs">
            <input type="text" name="name" placeholder="name" />
            <input type="text" name="email" placeholder="email" />
          </div>

          <input name="message" placeholder="send message" id="message" />

          <button>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contactus;
