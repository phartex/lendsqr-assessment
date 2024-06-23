import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { FaSearch, FaBell } from 'react-icons/fa';

const Navbar = () => {
    const handleLogoClick = () => {
        localStorage.clear();
        window.location.href = '/';
      };
    
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <Link to="/" className="logo-link" onClick={handleLogoClick}>
          <img src="/assets/lendsqr-logo.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-center">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="navbar-right">
        <a href="/docs" className="nav-link">Docs</a>
        <FaBell className="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
