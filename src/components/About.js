import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="aboutinfo">
        <div className="maintitlediv">
          <h1 className="maintitle">LoanMoney Company</h1>
        </div>
        <div className="miniinfo">
          <div>
            <h1>Our Company</h1>
            <p>
              You could try by giving the viewer paper cut, but that’s not the
              kind of attention
            </p>
          </div>
          <div>
            <h1>Our Vision</h1>
            <p>
              The brochure must grab a viewer’s attention and hold it long
              enough to
            </p>
          </div>
        </div>
        <div className="aboutbutton">
          <button className="aboutbtn">Learn More</button>
        </div>
      </div>
      <div className="aboutimg">
        <div className="imgdiv"></div>
      </div>
    </section>
  );
};

export default About;
