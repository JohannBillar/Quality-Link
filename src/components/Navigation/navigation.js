import React, { Component } from 'react';
import Link from 'gatsby-link';
import { menumaker, menuRender } from './menu';
import Logo from '../../assets/QualityLinkLogo_974x110.png';

import './navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="align-center primary-navigation" id="cssmenu">
        <ul>
          <div className="navigation-logo">
            <Link to="/">
              <img className="navigation-logo-image" src={Logo} alt="logo" />
            </Link>
          </div>
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
