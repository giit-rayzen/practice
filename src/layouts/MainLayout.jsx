

import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import MainNavbar from '../components/Navbar';
import SectionNavbar from '../components/SectionNavbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const { section } = useParams();

  return (
    <div>
      {/* Main BSNL Navbar */}
      <MainNavbar/>

      {/* Section-specific Navbar */}
      {section && <SectionNavbar section={section} />}

      {/* Main content */}
      <div className="container mt-5">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
