import React from 'react';
import PlanDetails from '../sections/Individual/PlanDetails';
import CustomerAccount from '../sections/Individual/CustomerAccount';
import CustomerAcquisition from '../sections/Individual/CustomerAcquisition';
import ManageConnection from '../sections/Individual/ManageConnection';
import CustomerService from '../sections/Individual/CustomerService';

function Individual() {
  return (
    <div className="container">
      <PlanDetails />
      <CustomerAccount />
      <CustomerAcquisition />
      <ManageConnection />
      <CustomerService />
    </div>
  );
}

export default Individual;
