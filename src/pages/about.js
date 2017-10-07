import React from 'react';
import Link from 'gatsby-link';
import { Header1, Header2, Header3 } from '../components/text/Headers';
import { rhythm } from '../utils/typography';

const container = {
  margin: `0 auto`,
  maxWidth: 960,
  padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
  paddingTop: 0
};

const About = () => (
  <div>
    <section style={container}>
      <div className="mobile-h1">
        <h1>About</h1>
      </div>
      <section>
        <Header2 color="#161f4b">About Quality Link Consulting</Header2>
        <div className="row">
          <section className="eight columns">
            <Header3 color="#3348b1">
              Quality Link Consulting supports the Biotechnology, pharmaceutical, and Medical Device industries
            </Header3>
            <p>
              We provide support for bringing products to market in a compliance driven manner. From Phase I through
              approval, consultants use a practical approach to Quality Management.
            </p>
            <p>
              Quality Link Consulting has provided Quality management and auditing support for small, mid-size, and
              large pharmaceutical companies as well as a start-up clinical technology company. Inspection experience
              includes FDA, EMA, and MHRA.
            </p>
            <p>
              Quality Link Consulting specializes in Quality Assurance Audits, Quality Management System implementation
              and support, non-compliance investigations and CAPA, Vendor Management, inspection readiness and
              inspection support.
            </p>
            <p>
              <Link to="/contact/">Please click here to contact us for your specific business needs.</Link>
            </p>
          </section>
          <aside className="four columns">
            <Header3 color="#3348b1">Quality Link Consulting’s industry experience includes</Header3>
            <p>
              GCP, GLP, and GMP in Biologics, Pharmaceuticals, and Medical Devices. Early to late phase clinical
              programs as well as post-marketing studies and registries in the following disease areas:
            </p>
            <uL className="quality-link-icon">
              <li>Rare/Orphan Diseases</li>
              <li>Oncology</li>
              <li>Rheumatology</li>
              <li>Ophthalmology</li>
            </uL>
          </aside>
        </div>
      </section>
    </section>
  </div>
);

export default About;
