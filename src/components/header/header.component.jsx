import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';



function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/book-list" className="nav-link">Book List</Link>
          </li>
          <li className="nav-item">
            <Link to="/add-book" className="nav-link">Add Book</Link>
          </li>
          <li className="nav-item">
            <Link to="/log-out" className="nav-link">Log Out</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
