import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import wizimage from '../assets/wiz-logo-removebg-preview.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={wizimage} alt="logo" className='logo-img' />
        <h1>Webappwiz</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;