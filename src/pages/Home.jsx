import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import MainNavbar from '../components/Navbar';
import SectionNavbar from '../components/SectionNavbar';
import HomeCarousel from '../components/HomeCarousel';
import Footer from '../components/Footer';
import CardLayout from './CardLayout';
import 'animate.css'; // Import Animate.css for animations
import './Home.css'; // Import your custom CSS for Home page

function Home() {
  const { section } = useParams();  // Get the section from URL

  return (
    <div className="text-center">

      {/* Main Navbar (Fixed) */}
      <MainNavbar />

      {/* Main Content */}
      <div className="container">

        {/* Animated Heading */}
        <h1 className="text-dark animate__animated animate__fadeInDown custom-fade-in">
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

        {/* Dynamic content from other routes */}
        <div className="mt-5">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <h3>Updating soon !</h3>
      <Footer />
    </div>
  );
}

export default Home;
