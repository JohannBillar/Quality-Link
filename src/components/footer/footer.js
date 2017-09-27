import React from 'react';
import Link from 'gatsby-link';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <section className="container">
      <section className="row">
        <section className="four columns">
          <h4>Need help? Contact Us</h4>
          <address>
            <i className="fa fa-map-marker" /> 4445 Eastgate Mall, Suite 200<br />
            San Diego, CA 92121<br />
            USA<br />
            <a href="tel://+6197191604">
              <i className="fa fa-phone" /> 1-619-719-1604
            </a>
            <br />
            <a href="mailto:info@qualitylinkconsulting.com?SUBJECT=Website-information">
              <i className="fa fa-envelope-o" /> info@qualitylinkconsulting.com
            </a>
          </address>
        </section>
        <nav className="four columns social-media-navigation">
          <h4>Connect With Quality Link</h4>
          <a href="https://www.linkedin.com/nhome/">
            <i className="fa fa-linkedin-square fa-3x" />
          </a>
          <a href="https://accounts.google.com">
            <i className="fa fa-google-plus-square fa-3x" />
          </a>
        </nav>
        <nav className="four columns secondary-navigation">
          <h4>Navigate Site</h4>
          <uL>
            <li>
              <a href="index.html">
                <i className="fa fa-home" /> Home
              </a>
            </li>
            <li>
              <a href="services.html">
                <i className="fa fa-angle-double-right" /> Services
              </a>
            </li>
            <li>
              <a href="training.html">
                <i className="fa fa-book" /> Training
              </a>
            </li>
            <li>
              <a href="about.html">
                <i className="fa fa-info-circle" /> About
              </a>
            </li>
            <li>
              <a href="contactus.html">
                <i className="fa fa-envelope" /> Contact Us
              </a>
            </li>
            <li>
              <a href="sitemap.html">
                <i className="fa fa-sitemap" /> Site Map
              </a>
            </li>
          </uL>
        </nav>
      </section>
      <section className="row">
        <p>
          <small className="twelve columns">
            Copyright &copy; {new Date().getFullYear()} Quality Link Consulting LLC.
          </small>
        </p>
      </section>
    </section>
  </footer>
);

export default Footer;
