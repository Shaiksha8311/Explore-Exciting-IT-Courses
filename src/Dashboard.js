// Dashboard.js

import React from 'react';
import Metric from './Metric';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard({ isLoggedIn, handleLogin, handleLogout }) {
  const handleLoginClick = () => {
    handleLogin();
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Explore Exciting Courses and Enhance Your Skills</h2>
        {isLoggedIn && (
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        )}
      </header>
      <div className="home-section">
        <h3>Home Section</h3>
        <p>
          Welcome to our learning platform! Explore a variety of courses to enhance your skills and knowledge in programming and development.
        </p>
      </div>
      <div className="metrics">
        <Metric title="Courses" value={15} />
      </div>
      <div className="cards">
        <div className="card">
          <h3>Python Programming</h3>
          <p>
            Learn Python, a versatile and powerful programming language widely used for web development, data science, artificial intelligence, and more.
          </p>
          <Link to="/login" className="enroll-button">Enroll</Link>
        </div>
        <div className="card">
          <h3>JavaScript Fundamentals</h3>
          <p>
            Master the fundamentals of JavaScript, the language that powers dynamic content on the web. Explore DOM manipulation, asynchronous programming, and more.
          </p>
          <Link to="/login" className="enroll-button">Enroll</Link>
        </div>
        <div className="card">
          <h3>React JS for Web Development</h3>
          <p>
            Dive into React JS, a popular JavaScript library for building user interfaces. Create interactive and responsive web applications with ease.
          </p>
          <Link to="/login" className="enroll-button">Enroll</Link>
        </div>
        <div className="card">
          <h3>Angular JS Essentials</h3>
          <p>
            Explore Angular JS, a powerful front-end framework for building dynamic web applications. Understand concepts like two-way data binding and dependency injection.
          </p>
          <Link to="/login" className="enroll-button">Enroll</Link>
        </div>
        <div className="card">
          <h3>HTML and CSS Mastery</h3>
          <p>
            Learn the building blocks of web development – HTML and CSS. Create visually appealing and responsive web pages.
          </p>
          <Link to="/login" className="enroll-button">Enroll</Link>
        </div>
        <div className="card">
          <h3>Java Programming Basics</h3>
          <p>
            Start your journey in Java programming. Understand the fundamentals of object-oriented programming and application development.
          </p>
          <Link to="/login" className="enroll-button">Enroll</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
