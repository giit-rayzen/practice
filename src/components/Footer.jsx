/*
import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center py-4">
      <p>&copy; 2024 BSNL. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
*/

import React from 'react';
import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer mt-auto py-4" style={{ backgroundColor: '#add8e6' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-black">Mobile</a></li>
              <li><a href="#" className="text-black">Fiber</a></li>
              <li><a href="#" className="text-black">Buisness</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-black">Help Center</a></li>
              <li><a href="#" className="text-black">Contact Us</a></li>
              <li><a href="#" className="text-black">FAQs</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Useful links</h5>
            <ul className="list-unstyled" >
              <li><a href="#" className="text-black">Recharge</a></li>
              <li><a href="#" className="text-black">Login</a></li>
              <li><a href="#" className="text-black">Sitemap</a></li>
              <li><a href="#" className="text-black">Careers</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://in.linkedin.com/company/bsnl" className="text-black">Linkedln</a></li>
              <li><a href="https://x.com/BSNLCorporate" className="text-black">Twitter</a></li>
              <li><a href="https://x.com/BSNLCorporate" className="text-black">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center py-3">
          <p>&copy; 2024  Bharat Sanchar Nigam Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
