// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import AboutPage from './AboutPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </main>
        <footer className="footer">
       
        <p>&copy; 2024 Shaikshavali CodeHub | Building React Solutions</p>
     
      
        </footer>
      </div>
    </Router>
  );
}

export default App;
