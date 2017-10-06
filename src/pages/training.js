import React from 'react';
import { Parallax } from 'react-parallax';
import { Header1, Header2, Header3 } from '../components/text/Headers';
import Beaker from '../assets/Periodic-Table_high_989x640.jpg';
import { rhythm } from '../utils/typography';

const container = {
  margin: `0 auto`,
  maxWidth: 960,
  padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
  paddingTop: 0
};

const Training = () => (
  <div>
    <Parallax bgImage={Beaker} strength={400}>
      <Header1 color="#ffffff">
        <span className="quality-link-training">Training</span>
      </Header1>
    </Parallax>
    <section style={container}>
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
