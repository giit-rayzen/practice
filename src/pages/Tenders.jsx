import React from 'react';
import TenderUpload from '../sections/Tenders/TenderUpload';
import TenderSearch from '../sections/Tenders/TenderSearch';

function Tenders() {
  return (
    <div className="container">
      <TenderUpload />
      <TenderSearch />
    </div>
  );
}

export default Tenders;
