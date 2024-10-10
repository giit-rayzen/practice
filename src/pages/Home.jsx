/* import React from 'react'

const Home = () => {
  return (
    <div className='text-center'>
      <h2>Welcome to BSNL home page</h2>
      <h5>Best Telecom services with seamless connectivity</h5>
      <h3>stay connected for best services </h3>
    </div>
  )
}

export default Home
*/

import React from 'react';
import { useParams,Outlet } from 'react-router-dom';
import MainNavbar from '../components/Navbar';
import SectionNavbar from '../components/SectionNavbar';
import HomeCarousel from '../components/HomeCarousel';
import Footer from '../components/Footer';
import CardLayout from './CardLayout';

function Home() {
  const { section } = useParams();  // Get the section from URL

  return (
    <div className='text-align:center'>
    
      <MainNavbar />
      {<h1 className='text-dark'>Welcome to Home Page of <span className='badge bg-primary'>BSNL</span></h1>}
      <HomeCarousel/> 
      <CardLayout/>
     
      
      {section && <SectionNavbar section={section} />}
      <div className="container mt-5">
        <Outlet/>
       
      </div>
     <Footer/>
    </div>
  );
}

export default Home;
