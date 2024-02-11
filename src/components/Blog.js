import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

import { FaPerson } from "react-icons/fa6";

import "./blog.css";

const Blog = () => {
  return (
    <section className="blogsec">
      <div className="all-blog">
        <div className="blogs">
          <div className="bloginfo" id="blog-one"></div>
          <h1>Get Best Advertiser In Your Side Pocket</h1>
          <div className="blogs-span">
            <span>19th March, 2019</span>

            <span> John Smith</span>
            <p>
              One of my favourite things I like to watch is the bloopers and
              outtakes that are shown of mistakes made during
            </p>
            <div className="cont-icon">
              <blockquote className="cont">Continue Reading </blockquote>
              <FaLongArrowAltRight className="blog-icon" />
            </div>
          </div>
        </div>

        <div className="blogs">
          <div className="bloginfo" id="blog-two"></div>
          <h1>Internet Advertising Trends You Won T Be Disappointed</h1>
          <div className="blogs-span">
            <span>19th March, 2019</span>

            <span> John Smith</span>
            <p>
              More than 1 billion people frequent the Internet daily. Americans
              alone spent $69 billion buying things online in
            </p>
            <div className="cont-icon">
              <blockquote className="cont">Continue Reading </blockquote>
              <FaLongArrowAltRight className="blog-icon" />
            </div>
          </div>
        </div>

        <div className="blogs">
          <div className="bloginfo" id="blog-three"></div>
          <h1>Freelance Design Tricks How To Get Away With Murder</h1>
          <div className="blogs-span">
            <span>19th March, 2019</span>

            <span> John Smith</span>
            <p>
              More than 1 billion people frequent the Internet daily. Americans
              alone spent $69 billion buying things online in
            </p>
            <div className="cont-icon">
              <blockquote className="cont">Continue Reading </blockquote>
              <FaLongArrowAltRight className="blog-icon" />
            </div>
          </div>
        </div>
        <div className="blog-btn">
          <button>
            <FaLongArrowAltLeft />
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      <div className="taginfo">
        <div className="blogtaginfo">
          <h2>Search</h2>
          <input type="text" className="search-input" />
        </div>
        <div className="blogtagcon">
          <h2>Categories</h2>
          <ul>
            <li className="blog-list">
              <a>Finance</a>
              <span>13</span>
            </li>

            <li className="blog-list">
              <a>buisness</a>
              <span>24</span>
            </li>

            <li className="blog-list">
              <a>Loan</a>
              <span>07</span>
            </li>

            <li className="blog-list">
              <a>Credit</a>
              <span>04</span>
            </li>
          </ul>
        </div>
        <div className="blog-populartag">
          <h2>Popular Tag</h2>
          <div className="first-tag">
            <a>business</a>
            <a>Marketing</a>
            <a>Payment</a>
          </div>
          <div className="second-tag">
            <a>Travel</a>
            <a>Finance</a>
            <a>Videos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
