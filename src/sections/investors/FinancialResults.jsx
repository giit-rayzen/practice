// FinancialResults.js
import React from 'react';

const financialResultsData = [
  {
    quarter: "Q1 2024",
    revenue: "₹10,000 Crores",
    profit: "₹2,000 Crores",
    loss: "₹500 Crores",
    date: "June 2024"
  },
  {
    quarter: "Q4 2023",
    revenue: "₹9,500 Crores",
    profit: "₹1,800 Crores",
    loss: "₹400 Crores",
    date: "March 2024"
  },
  {
    quarter: "Q3 2023",
    revenue: "₹9,000 Crores",
    profit: "₹1,500 Crores",
    loss: "₹300 Crores",
    date: "December 2023"
  },
  {
    quarter: "Q2 2023",
    revenue: "₹8,500 Crores",
    profit: "₹1,200 Crores",
    loss: "₹250 Crores",
    date: "September 2023"
  }
];

const FinancialResults = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>BSNL Financial Results</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Quarter</th>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Revenue</th>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Profit</th>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Loss</th>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {financialResultsData.map((result, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid #dee2e6', textAlign: 'center' }}>{result.quarter}</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6', textAlign: 'center' }}>{result.revenue}</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6', textAlign: 'center' }}>{result.profit}</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6', textAlign: 'center' }}>{result.loss}</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6', textAlign: 'center' }}>{result.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialResults;
