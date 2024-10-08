import React from 'react';
import Reports from '../sections/Investors/Reports';
import Awards from '../sections/Investors/Awards';
import DebtIssuance from '../sections/Investors/DebtIssuance';

function Investors() {
  return (
    <div className="container">
      <Reports />
      <Awards />
      <DebtIssuance />
    </div>
  );
}

export default Investors;
