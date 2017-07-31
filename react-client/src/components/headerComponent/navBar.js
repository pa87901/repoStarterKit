import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul>
          <li><Link to="">Home</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;