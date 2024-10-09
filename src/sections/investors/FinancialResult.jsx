import React from 'react'

const FinancialResult = () => {
  return (
    <div>
      <h5>Year wise Financial data will list over here---</h5>
      <select className="form-select" aria-label="Select year ">
  <option selected>Open this select menu</option>
  <option value={2001}>2021</option>
  <option value={2022}>2022</option>
  <option value={2013}>2013</option>
  <option value={2024}>2024</option>
  <option value={2022}>2022</option>
  <option value={2023}>2023</option>
  <option value={2004}>2004</option>
  <option value={2000}>:</option>
</select>

    </div>
  )
}

export default FinancialResult