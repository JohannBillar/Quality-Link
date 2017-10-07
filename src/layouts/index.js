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
          meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
        />
        <Navigation />
        <div>{this.props.children()}</div>
        <Footer />
      </main>
    );
  }
}
