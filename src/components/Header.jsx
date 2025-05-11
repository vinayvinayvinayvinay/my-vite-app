import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Header({ user }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/feedback">Feedback</Link>
      {!user ? (
        <Link to="/login">Login</Link>
      ) : (
        <span>Logged in as {user.email}</span>
      )}
    </nav>
  );
}

export default Header;
