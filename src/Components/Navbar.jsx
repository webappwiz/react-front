import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li>
          <div className="dropdown">
            <span>Projects</span>
            <div className="dropdown-content">
              <a href="#project1">Project 1</a>
              <a href="#project2">Project 2</a>
            </div>
          </div>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;