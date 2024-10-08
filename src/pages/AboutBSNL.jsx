import React from 'react';
import CompanyInfo from '../sections/AboutBSNL/CompanyInfo';
import Leadership from '../sections/AboutBSNL/Leadership';
import Milestones from '../sections/AboutBSNL/Milestones';

function AboutBSNL() {
  return (
    <div className="container">
      <CompanyInfo />
      <Leadership />
      <Milestones />
    </div>
  );
}

export default AboutBSNL;
