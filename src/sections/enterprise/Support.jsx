import React from 'react'


const Support = () => {
  return (
    <div className="container py-5">
      {/* Heading Section */}
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center mb-5">
        You can reach us anytime for any queries.
      </p>

      <div className="row">
        {/* New Services Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-lg p-4">
            <h3 className="card-title mb-3">New Services</h3>
            <p className="card-text">
              <i className="fas fa-phone-alt me-2"></i> 1800-345-1500
            </p>
            <p className="card-text">
              <i className="fas fa-envelope me-2"></i> newservices@bsnl.com
            </p>
          </div>
        </div>

        {/* Existing Business Services Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-lg p-4">
            <h3 className="card-title mb-3">Existing Business Services</h3>
            <p className="card-text">
              <i className="fas fa-phone-alt me-2"></i> 1800-180-1500
            </p>
            <p className="card-text">
              <i className="fas fa-envelope me-2"></i> business@bsnl.com
            </p>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="text-center mt-5">
        <a href="#" className="btn btn-primary btn-lg">
          Request a Callback
        </a>
      </div>
    </div>
  );
};

export default Support;
