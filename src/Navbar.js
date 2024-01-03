// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="company-name">
        <h1 className='companyname'>DevShaik Innovations</h1>
      </div>
      <ul className="nav-list">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
        <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
        <li className="nav-item"><Link to="/signup" className="nav-link">Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
