import React from 'react';
import { Header1, Header2, Header3 } from '../components/text/Headers';
import { rhythm } from '../utils/typography';

const container = {
  margin: `0 auto`,
  maxWidth: 960,
  padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
  paddingTop: 0
};

const Services = () => (
  <div>
    <section style={container}>
      <div>
        <Header1 color="#161f4b">Services</Header1>
      </div>
      <section>
        <Header2 color="#161f4b">Quality Link Services</Header2>
        <div className="row services">
          <article className="four columns">
            <Header3 color="#3348b1" id="global-quality-audits">
              Global Quality Audits
            </Header3>
            <ul className="quality-link-icon">
              <li>
                GCP Site: audits of clinical investigator sites for compliance with the clinical protocol, ICH GCPs, and
                applicable country regulations
              </li>
              <li>
                Vendor: qualification/requalification of CROs, DM providers, Central Labs, Specialty Labs, Computer
                System providers
              </li>
              <li>
                Internal: audits of internal processes and controls to establish compliance and find process improvement
                opportunities
              </li>
              <li>
                Trial Master File: audits of electronic and paper-based TMFs to ensure on-going inspection readiness
              </li>
              <li>Document Audits: audits of protocols, amendments, and clinical study reports</li>
              <li>
                Affiliate/Local Operating Company Audits: internal audits of global affiliate (local operating company)
                offices.
              </li>
              <li>
                Program Audit Plans: comprehensive audit plans for clinical programs and use of data mining for site
                audit selection
              </li>
              <li>Audit Trending: trending, analysis, and process improvement recommendations of audit data</li>
            </ul>
          </article>
          <article className="four columns">
            <Header3 color="#3348b1" id="inspection-preparation">
              Inspection Preparation
            </Header3>
            <ul className="quality-link-icon">
              <li>Inspection Readiness Plans: Sponsor and site plans</li>
              <li>
                Inspection training/Mock Inspections: interview training, inspection process training and mock
                inspections
              </li>
              <li>
                Investigator Site Preparation and support: site training, preparation, and on-site support for
                international audits
              </li>
              <li>
                Sponsor Inspection Management and Support: back room support and management for Regulatory Inspections
              </li>
            </ul>
            <Header3 color="#3348b1" id="quality-systems">
              Quality Systems
            </Header3>
            <ul className="quality-link-icon">
              <li>Gap Assessments: Quality Management gap assessments</li>
              <li>Controlled Document Authoring: SOPs, Working Practices, Quality Manuals</li>
              <li>
                Training Program Implementation: design and implementation of training programs tailored to company
                needs
              </li>
              <li>Audit Program Implementation: establishment of internal and external audit programs</li>
              <li>Quality Metrics: establishment and tracking of Quality Metrics</li>
            </ul>
          </article>
          <article className="four columns">
            <Header3 color="#3348b1" id="investigations">
              Investigations
            </Header3>
            <ul className="quality-link-icon">
              <li>Investigations: into non- compliance, scientific misconduct, and fraud</li>
              <li>Compliance plans: thorough CAPA plans and investigation reports</li>
            </ul>
            <Header3 color="#3348b1" id="remote-qa">
              Remote QA
            </Header3>
            <ul className="quality-link-icon">
              <li>QA support: for companies with limited or no QA resources</li>
              <li>GCP Resource: on-call GCP resource </li>
              <li>Study Team Support: QA support for all phases of studies</li>
              <li>Audit Program Management: establishment of internal and external audit programs</li>
            </ul>
            <Header3 color="#3348b1" id="vendor-management">
              Vendor Management
            </Header3>
            <ul className="quality-link-icon">
              <li>
                Vendor qualification: due diligence audits to determine vendor suitability to perform contracted work
              </li>
              <li>Vendor Management: plans for oversight and tracking of vendor quality and performance</li>
              <li>Vendor Metrics: tracking vendor performance with established metrics</li>
            </ul>
          </article>
        </div>
      </section>
    </section>
  </div>
);

export default Services;
