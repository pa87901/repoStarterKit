import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header>
    <ul id="headerButtons">
      <li className="navButton"><Link to="/">Home</Link></li>
      <li className="navButton"><Link to="/about">About</Link></li>
    </ul>
  </header>
);

export default NavBar;