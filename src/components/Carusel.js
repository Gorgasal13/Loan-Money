import React from "react";
import Slider from "react-slick";
import "./carusel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import person from "../assets/person.jpg";

const Carusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="caruselbackground">
        <h1>What Customers Are Saying</h1>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting has
          been the
        </span>
      </div>

      <div className="full-page-container">
        <div className="carousel-container">
          <Slider {...settings}>
            <div className="carousel-item">
              <div className="slide-content">
                <figure className="testimonial">
                  <img src={person} className="testimonial-img" />
                  <span>John Smith</span>
                  <span>user</span>
                  <blockquote>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </blockquote>
                </figure>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide-content">
                <figure className="testimonial">
                  <img src={person} className="testimonial-img" />
                  <span>davit davitashvili</span>
                  <span>user</span>
                  <blockquote>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </blockquote>
                </figure>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide-content">
                <figure className="testimonial">
                  <img src={person} className="testimonial-img" />
                  <span>davit davitashvili</span>
                  <span>user</span>
                  <blockquote>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </blockquote>
                </figure>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide-content">
                <figure className="testimonial">
                  <img src={person} className="testimonial-img" />
                  <span>davit davitashvili</span>
                  <span>user</span>
                  <blockquote>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </blockquote>
                </figure>
              </div>
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Carusel;
