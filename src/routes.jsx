
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
import Discover from './sections/tenders/Discover'
import TenderUpload from './sections/tenders/TenderUpload';
import FinancialResult from './sections/investors/FinancialResult';
import Investors from './sections/investors/Investors';
import Report from './sections/investors/Report';

import Achievements from './sections/AboutBSNL/Achievements';
import Vision from './sections/AboutBSNL/Vision';
import Staff from './sections/AboutBSNL/Staff';
import GetBharatFiber from './sections/fiber/GetBharatFiber';
import PrepaidFiber from './sections/fiber/PrepaidFiber'
import PostpaidFiber from './sections/fiber/PostpaidFiber'
import MainLayout from './layouts/MainLayout';



function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Main route */}
        <Route path="/" element={<Home />} />

        {/* Dynamic section route */}
        <Route path="/:section" element={<MainLayout />}>
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
          <Route path="getbharatfiber" element={<GetBharatFiber />} />
          <Route path="prepaidfiber" element={<PrepaidFiber />} />
          <Route path="postpaidfiber" element={<PostpaidFiber />} />

          {/* Tenders sub-routes */}
          <Route path="discover" element={<Discover />} />
          <Route path="tenderupload" element={<TenderUpload />} />

           {/* Investors sub-routes */}
           <Route path="financialresult" element={<FinancialResult />} />
          <Route path="investors" element={<Investors />} />
          <Route path='report' element={<Report/>}/>

          {/* About BSNL SubRoutes */}
        
          <Route path='achievements' element={<Achievements/>}/>
          <Route path='vision' element={<Vision/>}/>
          <Route path='staff' element={<Staff/>}/>

        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes; 