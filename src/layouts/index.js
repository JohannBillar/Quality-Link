import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { rhythm } from '../utils/typography';
import Navigation from '../components/Navigation/navigation';
import Footer from '../components/footer/footer';
import '../css/main.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };
  render() {
    return (
      <main>
        <Helmet
          title="Quality Link Consulting"
          meta={[
            {
              name: 'GCP and GCLP Audits',
              content: 'Providing Global Quality Assurance Consulting and Auditing for the GxP regulated industry'
            },
            {
              name: 'Global Quality Audits',
              content:
                'GCP Site: audits of clinical investigator sites for compliance with the clinical protocol, ICH GCPs, and applicable country regulations'
            }
          ]}
        />
        <Navigation />
        <div>{this.props.children()}</div>
        <Footer />
      </main>
    );
  }
}
