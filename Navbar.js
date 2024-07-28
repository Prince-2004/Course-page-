import React, { useState } from 'react';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand-logo">
        <img src="https://via.placeholder.com/40" alt="Brand Logo" />
      </div>
      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        ☰
      </button>
      <div className="profile-button-container">
        <img src="https://via.placeholder.com/40" alt="User Profile" />
      </div>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <form onSubmit={handleSearchSubmit} className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">
            🔍
          </button>
        </form>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="search-bar">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="search-button">
              🔍
            </button>
          </form>
        </div>
        <button className="icon-button">🔔</button>
        <button className="icon-button">✉️</button>
        <div className="user-profile">
          <img src="https://via.placeholder.com/40" alt="User Profile" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
