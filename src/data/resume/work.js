/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Zodia Custody',
    position: 'Release Manager',
    url: 'https://zodiacustody.com',
    startDate: '2023-06-01',
    summary: 'Digital asset custody business operating in a highly regulated global environment.',
    highlights: [
      'Defined and governed end-to-end SDLC, with audit-grade traceability and security built in.',
      'Designed and operationalised controls aligned to ISO 27001 and SOC 2; presented directly to external auditors.',
      'Technology Risk Champion, formalising risk identification, control ownership and remediation tracking.',
      'Strengthened Incident, Problem and Change governance to improve auditability and operational resilience.',
    ],
  },
  {
    name: 'Zodia Custody',
    position: 'Product Owner',
    url: 'https://zodiacustody.com',
    startDate: '2022-11-01',
    endDate: '2023-06-01',
    summary: 'Digital asset custody business operating in a highly regulated global environment.',
    highlights: [
      'Joined as employee #17 in a cryptocurrency scale-up; contributed to growth to a 150+ person global org.',
      'Led backlog ownership, stakeholder engagement, roadmap delivery, and cross-functional execution in a highly regulated environment.',
    ],
  },
  {
    name: 'ConsentWise.io',
    position: 'Head of Service Delivery & Product Owner',
    url: 'https://consentwise.io',
    startDate: '2022-09-01',
    highlights: [
      'Drove the conception, launch, and refinement of ConsentWise\'s Open Banking core service-offering to successfully enable Qeetoto to pivot and generate new revenue streams.',
      'Implemented JIRA instances to manage product backlog and customer service requests.',
      'Launched ConsentWise.io website and social-media profile to attract new business.',
    ],
  },
  {
    name: 'Onecom',
    position: 'Head of Support (Contract - Maternity Cover)',
    url: 'https://onecom.co.uk',
    startDate: '2022-04-01',
    endDate: '2022-09-01',
    summary: 'Delivered 24x7x365 enterprise-grade Technical Support Function for the UK\'s largest independent telecoms provider.',
    highlights: [
      'Executed a seamless transition of all responsibilities from the incumbent Head of Support within an aggressive three-week maternity-leave handover plan.',
      'Successfully delivered all requirements of an ITIL based Service Function including Change, Incident, and Problem Management.',
      'Exceeded expectations through delivery of multiple self-initiated continuous-improvement projects beyond the requirements of the maternity cover.',
      'Created personal-development-plans for team members to facilitate career-development and service-improvement; identified and filled skills gaps through training and coaching.',
    ],
  },
  {
    name: 'Yapily',
    position: 'Head of Technology Support',
    url: 'https://yapily.com',
    startDate: '2019-07-01',
    endDate: '2022-03-01',
    highlights: [
      'Spearheaded Yapilys Customer Support Service with a focus on providing excellent service. Reporting directly to CTO and engaging all heads-of department leads, defined and delivered continuous-improvement initiatives to meet the needs of a continually changing, constantly growing, fast-paced fintech start up.',
      'Engineered and implemented multiple solutions to provide an outstanding technology support service. [Zendesk, Salesforce, StatusPage, JIRA, Confluence, Looker, Slack]',
      'Improved change and release process to reduce outages by working with engineering leads to implement multiple continuous-improvement initiatives such as Blue/Green deployment, Auto-testing, Static Code Analysis, Feature Flags.',
      'Reduced fault detection and recovery times through engineering and implementation of ITIL based Incident Management processes [Google Cloud Monitoring and Logging (Stackdriver), Grafana, PagerDuty, Incident.io]',
      'Successfully delivered a high-risk integration project to ensure Yapily maintained business-continuity when the UK left the European Union. Migrated hundreds of bank registrations without customer impact.',
    ],
  },
  {
    name: 'NatWest Markets',
    position: 'Service Desk Manager, Open Banking API',
    url: 'https://www.natwestgroup.com/',
    startDate: '2017-11-01',
    endDate: '2019-07-01',
    highlights: [
      'Established RBS Group\'s Open-Banking Service Desk to provide front-door support for external Third Parties (TPPs: Account and Payment providers) and Internal Stakeholders (Operations, Technology, Risk, Audit etc)',
      'Enabled RBS to launch its Open Banking API service meeting regulatory mandated deadlines by performing all registration activities and delivery of key OBIE requested information.',
    ],
  },
  {
    name: 'NatWest Markets',
    position: 'Ways of Working (WoW) DevOps Consultant',
    url: 'https://www.natwestgroup.com/',
    startDate: '2016-12-01',
    endDate: '2017-11-01',
    highlights: [
      'Provided consultancy services to internal customers to help them deliver the Bank\'s strategic enterprise-wide \'Continuous Delivery\' transformation programme.',
      'Enabled customers to understand their DevOps maturity through authoring and delivery of a library of DevOps Maturity-Model literature.',
      'Delivered and facilitated \'Continuous-Delivery\' and DevOps adoption workshops to help customers realise the benefits of adopting CI/CD initiatives.',
      'Empowered customers to reduce risk and quicken delivery cycle times through the creation of an \'Automated Testing\' Community of Practice.',
      'Drove DevOps adoption within RBS \'Finance Solutions\' organisation',
      'Delivered (fulfilling the CSM in a feature-team) the Bank\'s first Continuous-Delivery MVP (Minimal Viable Product) helping both the customer and the bank achieve its intended business outcomes.',
    ],
  },
  {
    name: 'NatWest Markets',
    position: 'Global Head of Middleware Operation (Vice President)',
    url: 'https://www.natwestgroup.com/',
    startDate: '2012-08-01',
    endDate: '2016-11-01',
    highlights: [
      'Global Head accountable for 24x7x365 operation of RBS complex and diverse mission-critical Middleware and Payments systems and execution of enterprise-wide strategic initiatives. Certified Category 1 change approver and Major Incident Escalation responder.',
      'Built and cultivated a global team to deliver ITIL Service Operations process including: Change Management, Incident Management, Problem Management and other ITIL processes',
      'Reduced operational risk through orchestration of business-continuity and disaster-recovery events, ensuring any identified issues were captured and resolved through the banks risk management process.',
      'Reduced annual running costs by £270k-a-year through implementing strategic offshoring whilst not impacting team morale or customer service.',
      'Delivered major integration project consolidating two banks technologies (ABN and RBS) on to a common middleware, enabling application simplification and cost reduction.',
      'Improved operational efficiency and governance through rollout of strategic ServiceNow implementation.',
    ],
  },
  {
    name: 'NatWest Markets',
    position: 'Technical Team Lead, Middleware and Payment Systems',
    url: 'https://www.natwestgroup.com/',
    startDate: '2008-03-01',
    endDate: '2012-08-01',
    highlights: [
      'Responsible for the day to day running of business as usual (BAU) and keep the show on the road (KSOR) activities for multiple middleware systems. Trained and mentored team members and acted as first-line escalation.',
      'KSOR/BAU Activities: Incident, Change & Problem Management, Request fulfilment, BCP/DR execution.',
      'Executed multiple high-profile Regulatory and Compliance audits (e.g. SOX)',
      'Reduced enterprise-wide operational costs and achieve strategic goals through execution of Application Consolidation, Server Virtualisation, Data-centre Exit and other similar projects.',
      'Rolled out Geneos implementation to monitor the Banks key applications and supporting infrastructure. Installed and configured Geneos Gateways and Netprobes on Windows, Solaris, and Linux hosts.',
    ],
  },
  {
    name: 'NatWest Markets',
    position: 'Technical Support Engineer, Payment Systems',
    url: 'https://www.natwestgroup.com/',
    startDate: '2003-06-01',
    endDate: '2008-03-01',
    highlights: [
      'Delivered 24x7x365 3rd-line tech-support for NatWests payment systems: Swift, CREST, EUCLID, TRAX, etc.',
      'Performed all BAU, KSOR support functions - Incident, Change, and Problem Management, BCP, DR, Audit etc',
    ],
  },
  {
    name: 'Publicis Sapient',
    position: 'Information Technology Consultant',
    url: 'https://www.publicissapient.com/',
    startDate: '1998-06-01',
    endDate: '2003-06-01',
    highlights: [
      'Delivered client outcomes for strategic dotcom projects including price comparisons sites (MoneyGator), travel portals (Odobo), and fintech-start-ups (FXMP)',
    ],
  },
  {
    name: 'BT',
    position: 'Telephone Engineer',
    url: 'https://bt.com',
    startDate: '1987-02-01',
    endDate: '1994-09-01',
    highlights: [
      'Delivered quality customer service through fixing and installing telephone systems and managing engineering teams.',
    ],
  },
  {
    name: 'Basidon ITEC',
    position: 'Youth Training Scheme Student',
    url: 'https://www.itec.ac.uk/',
    startDate: '1985-09-01',
    endDate: '1987-02-01',
    highlights: [
      'Learned electronics, computing, business and office skills. Specialised in Electronic Engineering',
    ],
  },
];

export default work;
