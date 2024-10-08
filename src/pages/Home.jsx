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

function Home() {
  const { section } = useParams();  // Get the section from URL

  return (
    <div className='text-align:center'>
    
      <MainNavbar />
      {<h1>Welcome to BSNL Home Page</h1>}
      {section && <SectionNavbar section={section} />}
      <div className="container mt-5">
        <Outlet/>
       
      </div>
    </div>
  );
}

export default Home;