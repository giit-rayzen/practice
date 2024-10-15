

/*
import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import MainNavbar from '../components/Navbar';
import SectionNavbar from '../components/SectionNavbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const { section } = useParams();

  return (
    <div>
      
      <MainNavbar/>

      
      {section && <SectionNavbar section={section} />}

    
      <div className="container mt-5">
        <Outlet />
      </div>

      
      <Footer />
    </div>
  );
};

export default MainLayout;*/

// src/layouts/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavbar from '../components/Navbar';
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <>
      <MainNavbar />
      <div className="container mt-5">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}

export default MainLayout;
