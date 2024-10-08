/*
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SectionNavbar({ section }) {
  const sectionLinks = {
    mobile: [
      { name: 'Discover', path: './sections/mobile/index.js' },
      { name: 'Prepaid', path: '/mobile/Prepaid' },
      { name: 'Postpaid', path: '/mobile/Postpaid' },
      { name: 'Recharge', path: '/mobile/Recharge' },
    ],
    fiber: [
      { name: 'Discover', path: '/fiber/Discover' },
      { name: 'Plans', path: '/fiber/Plans' },
      { name: 'Installation', path: '/fiber/Installation' },
      { name: 'Support', path: '/fiber/Support' }
    ],
    enterprise: [
        { name: 'Discover', path: '/enterprise/Discover' },
        { name: 'Services', path: '../sections/enterprise/Services' },
        { name: 'Contact', path: '/enterprise/Contact' },
      ],
      tenders: [
        { name: 'Discover', path: '/tenders/TenderSearch' },
        { name: 'Tender', path: '/tenders/TenderUpload' },
      ],

  };

  return (
    <Nav className="justify-content-center" variant="tabs">
      {sectionLinks[section]?.map(link => (
        <Nav.Link as={Link} to={link.path} key={link.name}>
          {link.name}
        </Nav.Link>
      ))}
    </Nav>
  );
}

export default SectionNavbar;
*/

import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function SectionNavbar() {
  const { section } = useParams(); // Get section from URL

  const sectionLinks = {
    mobile: [
      { name: 'Plans', path: 'plans' },
      { name: 'Recharge', path: 'recharge' },
      { name: 'Prepaid', path: 'prepaid' }
    ],
    fiber: [
      { name: 'Plans', path: 'plans' },
      { name: 'Installation', path: 'installation' },
      { name: 'Support', path: 'support' }
    ],
    '5g': [
      { name: 'Plans', path: 'plans' },
      { name: 'Coverage', path: 'coverage' },
      { name: 'FAQ', path: 'faq' }
    ],
    enterprise: [
      { name: 'Solutions', path: 'solutions' },
      { name: 'Services', path: 'services' },
      { name: 'Support', path: 'support' }
    ],
  };

  return (
    <Nav className="justify-content-center" variant="tabs">
      {sectionLinks[section]?.map(link => (
        <Nav.Link as={Link} to={link.path} key={link.name}>
          {link.name}
        </Nav.Link>
      ))}
    </Nav>
  );
}

export default SectionNavbar;