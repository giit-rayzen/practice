
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
      {name:'BSNL-Fiber', path:'getbharatfiber'},
      { name: 'Prepaid', path: 'prepaidfiber' },
      { name: 'Postpaid', path: 'postpaidfiber' },
      { name: 'Installation', path: 'installation' },
    ],
    enterprise: [
      { name: 'Solutions', path: 'solutions' },
      { name: 'Services', path: 'services' },
      { name: 'Support', path: 'support' }
    ],
    tenders: [
      { name: 'Discover', path: 'discover' },
      { name: 'TenderUpload', path: 'tenderupload' },
      { name: 'Support', path: 'support' }
    ],
    investors: [
      { name: 'Financial-Result', path: 'financialresult' },
      { name: 'Investors', path: 'investors' },
      { name: 'Report', path: 'report' }
    ],
    aboutbsnl:[
  
      {name:'Achievements',path:'achievements'},
      {name:'Mission-Vision',path:'vision'},
      {name:'Staff',path:'staff'},
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