import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function LanguageSwitcher() {
  const [language, setLanguage] = useState('English');

  const handleSelect = (eventKey) => {
    setLanguage(eventKey);
    // Implement language switching logic here
    alert(`Language switched to ${eventKey}`);
  };

  return (
    <Dropdown onSelect={handleSelect} className="ms-3">
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {language}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="English">English</Dropdown.Item>
        <Dropdown.Item eventKey="Hindi">Hindi</Dropdown.Item>
        {/* Add more languages as needed */}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSwitcher;
