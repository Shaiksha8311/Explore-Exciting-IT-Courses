// Metric.js
import React from 'react';
import './Metric.css';

function Metric({ title, value }) {
  return (
    <div className="metric">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
}

export default Metric;
