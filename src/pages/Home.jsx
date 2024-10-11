import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import MainNavbar from '../components/Navbar';
import SectionNavbar from '../components/SectionNavbar';
import HomeCarousel from '../components/HomeCarousel';
import Footer from '../components/Footer';
import CardLayout from './CardLayout';
import 'animate.css'; // Import Animate.css for animations

function Home() {
  const { section } = useParams();  // Get the section from URL

  return (
    <div className="text-center">

      {/* Main Navbar */}
      <MainNavbar />

      {/* Animated Heading */}
      <h1 className="text-dark animate__animated animate__fadeInDown">
        Welcome to Home Page of <span className="badge bg-primary">BSNL</span>
      </h1>

      {/* Carousel with Slide Animation */}
      <div className="animate__animated animate__slideInLeft">
        <HomeCarousel />
      </div>

      {/* Card Layout with Zoom Animation */}
      <div className="animate__animated animate__zoomIn">
        <CardLayout />
      </div>

      {/* Section Navbar if applicable */}
      {section && <SectionNavbar section={section} />}

      {/* Render dynamic content */}
      <div className="container mt-5">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
