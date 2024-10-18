import React from 'react';
import { Link } from 'react-router-dom';  // Add this import

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
        <li>
          <Link to="/pickup-delivery">Pickup & Delivery</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>  {/* Link to login page */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

