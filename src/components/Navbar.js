import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link className="main-title" to={"/"}>
          LoanMoney
        </Link>
        <div className="lists">
          <ul>
            <Link className="list" to={"/"}>
              Home
            </Link>
            <Link className="list" to={"/about"}>
              About
            </Link>
            <Link className="list" to={"/services"}>
              Services
            </Link>
            <Link className="list" to={"/blog"}>
              Blog
            </Link>
            <Link className="list" to={"/contact"}>
              Contact
            </Link>
          </ul>
          <FaSearch size={20} className="icon" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
