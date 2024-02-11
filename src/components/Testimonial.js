import React from "react";

import { CiWallet } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { BsAward } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

import "./testimonial.css";

const Testimonial = () => {
  return (
    <section className="testemonialsec">
      <div className="testemonialdiv">
        <div className="testemonialcon">
          <CiWallet size={100} color="#4caf50" />
          <h1>3500</h1>
          <span>Successful Loan Approval</span>
        </div>
        <div className="testemonialcon">
          <AiOutlineLike size={100} color="#4caf50" />
          <h1>99%</h1>
          <span>Customer Satisfection</span>
        </div>
        <div className="testemonialcon">
          <BsAward size={100} color="#4caf50" />
          <h1>90+</h1>
          <span>Successful Loan Approval</span>
        </div>
        <div className="testemonialcon">
          <FaHandshake size={100} color="#4caf50" />
          <h1>100+</h1>
          <span>Award Certificate</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
