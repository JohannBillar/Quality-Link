import React from 'react';
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';

const container = {
  margin: `0 auto`,
  maxWidth: 960,
  padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
  paddingTop: 0
};

export default () => (
  <div style={container}>
    <div className="row">
      <section className="six columns services" style={{ marginTop: `${rhythm(3)}` }}>
        <Link to="/">
          <div className="quality-link-icon-xxl" />
        </Link>
      </section>
      <div className="six columns" style={{ marginTop: `${rhythm(3)}` }}>
        <h1 className="mobile-h1">Thank you!</h1>
        <p>We will get back to you as soon as possilble</p>
      </div>
    </div>
  </div>
);
