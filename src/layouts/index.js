import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { rhythm } from '../utils/typography';
import Navigation from '../components/Navigation/Navigation';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    return (
      <div>
        <Helmet
          title="Quality Link Consulting"
          meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
        />
        <div
          style={{
            background: `#1d2965`,
            marginBottom: rhythm(1)
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `${rhythm(1)} ${rhythm(3 / 4)}`
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                Quality Link
              </Link>
            </h1>
          </div>
        </div>
        <Navigation />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }
}
