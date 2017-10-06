import React from 'react';
import Link from 'gatsby-link';
import { rhythm } from '../../utils/typography';
import './footer.css';

const container = {
  margin: `0 auto`,
  maxWidth: 960,
  padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
  paddingTop: 0
};

const Footer = () => (
  <footer className="footer">
    <section style={container}>
      <section className="row">
        <section className="four columns">
          <h4>Need help? Contact Us</h4>
          <address>
            <span className="fa fa-map-marker" /> 4445 Eastgate Mall, Suite 200<br />
            San Diego, CA 92121<br />
            USA<br />
            <a href="tel://+6197191604">
              <span className="fa fa-phone" /> 1-619-719-1604
            </a>
            <br />
            <a href="mailto:info@qualitylinkconsulting.com?SUBJECT=Website-information">
              <span className="fa fa-envelope-o" /> info@qualitylinkconsulting.com
            </a>
          </address>
        </section>
        <nav className="four columns social-media-navigation">
          <h4>Connect With Quality Link</h4>
          <a to="https://www.linkedin.com/nhome/">
            <span className="fa fa-linkedin-square fa-3x" />
          </a>
          <a to="https://accounts.google.com">
            <span className="fa fa-google-plus-square fa-3x" />
          </a>
        </nav>
        <nav className="four columns secondary-navigation">
          <h4>Navigate Site</h4>
          <uL>
            <li>
              <Link
                to="/"
                exact
                activeStyle={{
                  color: '#dff2fa'
                }}
              >
                <span className="fa fa-home" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/services/"
                activeStyle={{
                  color: '#dff2fa'
                }}
              >
                <span className="fa fa-angle-double-right" /> Services
              </Link>
            </li>
            <li>
              <Link
                to="/training/"
                activeStyle={{
                  color: '#dff2fa'
                }}
              >
                <span className="fa fa-book" /> Training
              </Link>
            </li>
            <li>
              <Link
                to="/about/"
                activeStyle={{
                  color: '#dff2fa'
                }}
              >
                <span className="fa fa-info-circle" /> About
              </Link>
            </li>
            <li>
              <Link
                to="/contact/"
                activeStyle={{
                  color: '#dff2fa'
                }}
              >
                <span className="fa fa-envelope" /> Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/sitemap/"
                activeStyle={{
                  color: '#dff2fa'
                }}
              >
                <span className="fa fa-sitemap" /> Site Map
              </Link>
            </li>
          </uL>
        </nav>
      </section>
      <section className="row">
        <p>
          <small className="twelve columns">Copyright &copy; {new Date().getFullYear()} Quality Link LLC.</small>
        </p>
      </section>
    </section>
  </footer>
);

export default Footer;
