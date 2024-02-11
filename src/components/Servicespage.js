import React from "react";
import { IoMdTimer } from "react-icons/io";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaDiagramPredecessor } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { SiEasyeda } from "react-icons/si";

import "./servicespage.css";

const Servicespage = () => {
  return (
    <section className="servpage">
      <div className="servtext">
        <h1>Why People Choose Us</h1>
        <span>
          This question should make the viewer want to open the brochure to
          learn more.
        </span>
      </div>
      <div className="servdivs">
        <div className="firstservdiv">
          <div className="servdiv">
            <div className="icons">
              <IoMdTimer size={60} color="white" />
            </div>
            <div className="servdivcontext">
              <h3>Quick & Easy</h3>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </div>
          </div>
          <div className="servdiv">
            <div className="icons">
              <FaMoneyCheckAlt size={60} color="white" />
            </div>
            <div className="servdivcontext">
              <h3>Absolute Security</h3>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </div>
          </div>
          <div className="servdiv">
            <div className="icons">
              <FaDiagramPredecessor size={60} color="white" />
            </div>
            <div className="servdivcontext">
              <h3>Low Interest Rates</h3>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </div>
          </div>
        </div>
        <div className="secondservdiv">
          <div className="servdiv">
            <div className="icons">
              <MdOutlineSecurity size={60} color="white" />
            </div>
            <div className="servdivcontext">
              <h3>Personal Security</h3>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </div>
          </div>
          <div className="servdiv">
            <div className="icons">
              <AiFillLike size={60} color="white" />
            </div>
            <div className="servdivcontext">
              <h3>Disbursement Day</h3>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </div>
          </div>
          <div className="servdiv">
            <div className="icons">
              <SiEasyeda size={60} color="white" />
            </div>
            <div className="servdivcontext">
              <h3>Quick & Easy</h3>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicespage;
