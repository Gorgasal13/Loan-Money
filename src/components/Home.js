import React from "react";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeinfo">
        <h1>Find The Best Monthly Payment</h1>
        <p>Apply for our business loan in minutes, without painful</p>
        <div className="btnsdiv">
          <button className="btns" id="firstbtns">
            get started
          </button>
          <button className="btns" id="secondbtns">
            how it works
          </button>
        </div>
      </div>
      <div className="homeform">
        <form>
          <h1>How much do you need</h1>
          <div className="row-form-group">
            <div className="form-group">
              <label htmlFor="money">Amount of money ($):</label>
              <input type="text" name="money" />
            </div>
            <div className="form-group">
              <label htmlFor="day">How long for (day):</label>
              <input type="text" name="day" />
            </div>
          </div>
          <div className="form-group label-full-width">
            <label htmlFor="repayment">Repayment:</label>
            <input type="text" name="repayment" />
          </div>
          <div className="row-form-group">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="text" name="phone" />
            </div>
          </div>
          <button className="btn">Get Your Loan Now</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
