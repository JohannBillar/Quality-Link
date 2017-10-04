import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { rhythm } from '../utils/typography';
import { Header1, Header2, Header3 } from '../components/text/Headers';

export default class Index extends Component {
  render() {
    return (
      <div>
        <section>
          <div>
            <Header1 color="#161f4b">Quality Link Consulting</Header1>
          </div>
          <section>
            <Header2 color="#161f4b">Audits and Consulting</Header2>
            <div className="row">
              <div className="seven columns">
                <Header3 color="#3348b1">
                  Providing Global Quality Assurance Consulting and Auditing for the GxP regulated industry
                </Header3>
                <p>
                  Quality Link Consulting offers a range of services to provide tailored compliance solutions to meet
                  the needs of the biotechnology, pharmaceutical and medical device, and supporting industries.
                </p>
              </div>
              <aside className="five columns">
                <Header3 color="#3348b1">Specialization In</Header3>
                <ul className="quality-link-icon" style={{ marginLeft: '0' }}>
                  <li>GCP and GCLP Audits</li>
                  <li>Investigations and For-Cause Audits</li>
                  <li>Inspection Preparation and Management</li>
                  <li>Quality Management Systems</li>
                  <li>Special Populations/Orphan Diseases</li>
                  <li>Vendor Management</li>
                </ul>
              </aside>
            </div>
          </section>
        </section>

        <section>
          <div>
            <Header1 color="#161f4b">Global Quality Assurance</Header1>
          </div>
          <article>
            <ul className="country-list">
              <li>United States</li>
              <li>Canada</li>
              <li>Argentina</li>
              <li>Brazil</li>
              <li>South Korea</li>
              <li>Japan</li>
              <li>Netherlands</li>
              <li>Germany</li>
              <li>United Kingdom</li>
              <li>Spain</li>
              <li>Italy</li>
              <li>Hungary</li>
              <li>New Zealand</li>
            </ul>
          </article>
        </section>

        <section>
          <Header2 color="#161f4b">Quality Link Services</Header2>
          <div className="row">
            <section className="six columns services" style={{ marginTop: `${rhythm(1 / 2)}` }}>
              <Link to="/services/">
                <div className="quality-link-icon-xxl" />
              </Link>
            </section>
            <nav className="six columns services">
              <ul className="quality-link-icon">
                <li>
                  <Link to="/services/#global-quality-audits">Global Quality Audits</Link>
                </li>
                <li>
                  <Link to="/services/#investigations">Investigations</Link>
                </li>
                <li>
                  <Link to="/services/#inspection-preparation">Inspection Preparation</Link>
                </li>
                <li>
                  <Link to="/services/#quality-systems">Quality Systems</Link>
                </li>
                <li>
                  <Link to="/services/#remote-qa">Remote QA</Link>
                </li>
                <li>
                  <Link to="/services/#vendor-management">Vendor Management</Link>
                </li>
                <li>
                  <Link to="/training/#training">Training</Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    );
  }
}
