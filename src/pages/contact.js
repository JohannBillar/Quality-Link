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

const Contact = () => (
  <div>
    <section style={container}>
      <div>
        <Header1 color="#161f4b">Contact</Header1>
      </div>

      <section>
        <Header2 color="#161f4b">Contact Quality Link Consulting</Header2>
        <div className="row">
          <section className="seven columns">
            <Header3 color="#3348b1">Our Address</Header3>

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

          <section className="five columns">
            <form name="contactus-form">
              <fieldset>
                <legend>
                  <Header3 color="#3348b1">WRITE US</Header3>
                </legend>
                <label htmlFor="name" className="field-type">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="clientname"
                  placeholder=" enter your name"
                  maxLength="30"
                  autoFocus
                  required
                />
                <label htmlFor="email" className="field-type">
                  Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="clientemail"
                  placeholder=" enter your email"
                  maxLength="30"
                  pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$"
                  required
                />
                <br />
                <label htmlFor="tel" className="field-type">
                  Your Phone Number:
                </label>
                <input type="tel" id="tel" name="clienttel" title="123-333-4444" maxLength="12" />
                <br />
                <p>Subject:</p>
                <select name="subject" required>
                  <option value="" />
                  <option value="" />
                  <option value="" />
                  <option value="" />
                  <option value="" />
                  <option value="" />
                  <option value="" />
                </select>
                <p>Describe what we can help you with:</p>
                <textarea />
                <button type="submit" name="submit-tee-time">
                  Send Message
                </button>
              </fieldset>
            </form>
          </section>
        </div>
      </section>
    </section>
  </div>
);

export default Contact;
