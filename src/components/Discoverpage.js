import React from "react";
import "./discoverpage.css";

const Discoverpage = () => {
  return (
    <section className="discoversec">
      <div className="discoverdiv" id="minione">
        <strong>01.</strong>
        <h2>
          Personal Loan
          <div className="hover-content">
            <p>Loan Money for Personal Loan.</p>
            <button className="discoverpagebtn">Learn More</button>
          </div>
        </h2>
      </div>
      <div className="discoverdiv" id="minitwo">
        <strong>02.</strong>
        <h2>
          Business Loan
          <div className="hover-content">
            <p>Loan Money for Business Loan.</p>
            <button className="discoverpagebtn">Learn More</button>
          </div>
        </h2>
      </div>
      <div className="discoverdiv" id="minithree">
        <strong>03.</strong>
        <h2>
          Education Loan
          <div className="hover-content">
            <p>Loan Money for Education Loan.</p>
            <button className="discoverpagebtn">Learn More</button>
          </div>
        </h2>
      </div>
      <div className="discoverdiv" id="minifour">
        <strong>04.</strong>
        <h2>
          Commercial Loan
          <div className="hover-content">
            <p>Loan Money for Commercial Loan.</p>
            <button className="discoverpagebtn">Learn More</button>
          </div>
        </h2>
      </div>
      <div className="discoverdiv" id="minifive">
        <strong>05.</strong>
        <h2>
          Health Loan
          <div className="hover-content">
            <p>Loan Big Money for Health Loan.</p>
            <button className="discoverpagebtn">Learn More</button>
          </div>
        </h2>
      </div>
    </section>
  );
};

export default Discoverpage;
