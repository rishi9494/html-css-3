import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/mobile-sold">Mobile Sold</Link>
        </li>
        <li>
          <Link to="/mobile-remaining">Mobile Remaining for Sale</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;