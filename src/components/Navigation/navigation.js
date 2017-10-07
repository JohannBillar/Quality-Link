import React, { Component } from 'react';
import Link from 'gatsby-link';
import MediaQuery from 'react-responsive';
import jQuery from 'jquery';
import { menuMaker, menuRender } from './menu';
import Logo from '../../assets/QualityLinkLogo_974x110.png';

import './navigation.css';

class Navigation extends Component {
  componentDidMount() {
    menuMaker(jQuery);
    menuRender(jQuery);
    const nav = document.querySelector('#cssmenu');
    const topOfNav = nav.offsetTop;
    function fixNav() {
      if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
      } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
      }
    }
    window.addEventListener('scroll', fixNav);
  }

  render() {
    return (
      <div>
        <MediaQuery query="(max-width: 766px)">
          <div>
            <Link to="/">
              <img style={{ margin: 0, paddingTop: '2%' }} src={Logo} alt="logo" />
            </Link>
          </div>
        </MediaQuery>
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
      </div>
    );
  }
}

export default navigation;
