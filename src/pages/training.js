import React from 'react';
import { Header1, Header2, Header3 } from '../components/text/Headers';
import { rhythm } from '../utils/typography';

const container = {
  margin: `0 auto`,
  maxWidth: 960,
  padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
  paddingTop: 0
};

const Training = () => (
  <div>
    <section style={container}>
      <div>
        <Header1 color="#161f4b">Training</Header1>
      </div>
      <section>
        <Header2 color="#161f4b">Quality Link Training</Header2>
        <div className="row">
          <section className="twelve columns">
            <Header3 color="#3348b1" id="training">
              Training
            </Header3>
            <ul className="quality-link-icon">
              <li>
                Tailored GCP training: GCP training tailored to specific functions (e.g. medical monitors, data
                managers, new clinical staff)
              </li>
              <li>Investigator Meeting and Site training: GCP training presentations for Investigator Meetings</li>
              <li>Inspection Readiness training: staff and site preparation for hosting regulatory inspections</li>
              <li>
                Lessons Learned training: facilitation of lessons learned trainings after audits, submissions, and
                inspections
              </li>
            </ul>
          </section>
        </div>
      </section>
    </section>
  </div>
);

export default Training;
