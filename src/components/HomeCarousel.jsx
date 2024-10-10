import React from 'react'
import logo from './logo.png'
import logo2 from './logo2.jpg'
import logo3 from './logo3.jpg'
//import './carousel.css'

const HomeCarousel = () => {
  return (
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-ride="carousel"  data-bs-touch="false" >
  <div className="carousel-inner">
    <div className="carousel-item active">
     <img src={logo3} className="d-block w-90" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={logo2} className="d-block w-90" alt="..." />
    </div>
    <div className="carousel-item">
    <img src={logo} className="d-block w-90 " alt="..." /> 
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

 
  )
}

export default HomeCarousel