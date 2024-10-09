import React from 'react';

const TenderUpload = () => {
  return (
    <div>
      <h4>Just fill these details (Demo for testing)</h4>
      <form action="/action_page.php" method="post">
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">Tender name:</label>
          <input type="text" className="form-control" id="name" placeholder="Enter Tender name" name="tender" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember" /> Remember me
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Tender Documents</label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default TenderUpload;
