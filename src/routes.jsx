/*
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Individual from './pages/Individual';
import Enterprise from './pages/Enterprise';
import Tenders from './pages/Tenders';
import Investors from './pages/Investors';
import AboutBSNL from './pages/AboutBSNL';
import NotFound from './pages/NotFound';
import Fiber from './pages/Fiber';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/individual" element={<Individual />} />
      <Route path="/fiber" element={<Fiber />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/tenders" element={<Tenders />} />
      <Route path="/investors" element={<Investors />} />
      <Route path="/about-bsnl" element={<AboutBSNL />} />
      <Route path="*" element={<NotFound />} /> {/* Wildcard for 404 
    </Routes>
  );
}

export default AppRoutes;
*/
/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:section/*" element={<Home />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default AppRoutes;
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Plans from './sections/mobile/Plans';
import Recharge from './sections/mobile/Recharge';
import Devices from './sections/mobile/Prepaid';
import Services from './sections/enterprise/Services';
import Support from './sections/enterprise/Support';
import Installation from './sections/fiber/Installation';
import Prepaid from './sections/mobile/Prepaid';
import Solutions from './sections/enterprise/Solutions';

// Add more imports for other sections and sub-sections...

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Main route */}
        <Route path="/" element={<Home />} />

        {/* Dynamic section route */}
        <Route path="/:section" element={<Home />}>
          {/* Mobile sub-routes */}
          <Route path="plans" element={<Plans />} />
          <Route path="recharge" element={<Recharge />} />
          <Route path='Prepaid' element={<Prepaid/>}  />     
          {/* Enterprise sub-routes */}
          <Route path="services" element={<Services />} />
          <Route path="support" element={<Support />} />
          <Route path="solutions" element={<Solutions />} />

          {/* Fiber sub-routes */}
          <Route path="installation" element={<Installation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;