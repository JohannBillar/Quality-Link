import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Header1, Header2, Header3 } from '../components/text/Headers';

export default class Index extends Component {
  render() {
    return (
      <div>
        <section>
          <div>
            <Header1 color="#161f4b">Consulting</Header1>
          </div>
        </section>

        <Header2 color="#161f4b">Audits and Consulting</Header2>
        <section className="row">
          <div className="seven columns">
            <Header3 color="#3348b1">
              Providing Global Quality Assurance Consulting and Auditing for the GxP regulated industry
            </Header3>
            <p>
              Quality Link Consulting offers a range of services to provide tailored compliance solutions to meet the
              needs of the biotechnology, pharmaceutical and medical device, and supporting industries.
            </p>
          </div>
          <aside className="five columns">
            <Header3 color="#3348b1">Specialization In</Header3>
            <ul class="quality-link-icon">
              <li>GCP and GCLP Audits</li>
              <li>Investigations and For-Cause Audits</li>
              <li>Inspection Preparation and Management</li>
              <li>Quality Management Systems</li>
              <li>Special Populations/Orphan Diseases</li>
              <li>Vendor Management</li>
            </ul>
          </aside>
        </section>
      </div>
    );
  }
}
