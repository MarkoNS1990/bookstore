import React from 'react';
import CategoryFilter from './CategoryFilter';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="nav-bar" id="navbar">
    <ul className="nav-list">
      <li className="nav-list-item">
        <h1 className="logo-h1">
          <a className="logo-a" href="#navbar">Bookstore CMS</a>
        </h1>
      </li>
      <li className="nav-list-item">
        <a className="nav-a-selected" href="#books-table">BOOKS</a>
      </li>
      <li className="nav-list-item">
        <CategoryFilter />
      </li>
    </ul>
    <div className="user-div">
      <i className="fas fa-user fa-2x" />

    </div>
  </nav>

);

export default Navbar;
