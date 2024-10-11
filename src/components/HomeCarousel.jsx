import React from 'react';
import logo from './logo.png';
import logo2 from './logo2.jpg';
import logo3 from './logo3.jpg';
import './Carousel.css'

const HomeCarousel = () => {
  return (
    <div id="homeCarousel" className="carousel slide home-carousel" data-bs-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#homeCarousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#homeCarousel" data-bs-slide-to="2"></li>
      </ol>

      {/* Carousel Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={logo3} className="d-block w-100" alt="First slide" />
          <div className="carousel-caption">
            <h3>5G Network</h3>
            <p>Experience blazing-fast speeds with BSNL 5G</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={logo2} className="d-block w-100" alt="Second slide" />
          <div className="carousel-caption">
            <h3>Unlimited Wi-Fi</h3>
            <p>Get seamless Wi-Fi with no data limits</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={logo} className="d-block w-100" alt="Third slide" />
          <div className="carousel-caption">
            <h3>Best Coverage</h3>
            <p>Reliable and strong network coverage all over India</p>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <a className="carousel-control-prev" href="#homeCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#homeCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default HomeCarousel;
