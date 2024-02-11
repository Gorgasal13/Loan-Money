import React from "react";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contactsec">
      <div className="contact-text">
        <h1>Request A Call Back</h1>
        <p>
          Posters had been a very beneficial marketing tool because it had paved
          to deliver an effective message that conveyed customer’s attention.
        </p>
        <h3>Contact Us</h3>
      </div>
      <div className="contact-form">
        <form className="conform">
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="phone" placeholder="phone" />
          <input
            type="text"
            name="chooseservice"
            placeholder="choose service"
          />
          <button>submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
