import React, { Component } from 'react';
import Link from 'gatsby-link';
import { menumaker, menurender } from './menu';

import './navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="align-center primary-navigation" id="cssmenu">
        <ul>
          <li className="active">
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none'
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services/"
              style={{
                color: 'white',
                textDecoration: 'none'
              }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/training/"
              style={{
                color: 'white',
                textDecoration: 'none'
              }}
            >
              Training
            </Link>
          </li>
          <li>
            <Link
              to="/about/"
              style={{
                color: 'white',
                textDecoration: 'none'
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact/"
              style={{
                color: 'white',
                textDecoration: 'none'
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
