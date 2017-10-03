import React, { Component } from 'react';
import Link from 'gatsby-link';
import { menumaker, menuRender } from './menu';

import './navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="align-center primary-navigation" id="cssmenu">
        <ul>
          <li>
            <Link
              to="/"
              exact
              activeStyle={{
                color: '#dff2fa'
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services/"
              activeStyle={{
                color: '#dff2fa'
              }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/training/"
              activeStyle={{
                color: '#dff2fa'
              }}
            >
              Training
            </Link>
          </li>
          <li>
            <Link
              to="/about/"
              activeStyle={{
                color: '#dff2fa'
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact/"
              activeStyle={{
                color: '#dff2fa'
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
