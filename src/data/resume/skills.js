const skills = [
  {
    title: 'Global Application Support Team Management',
    competency: 5,
    category: ['ITIL'],
  },
  {
    title: 'ITIL Appliction Support',
    competency: 5,
    category: ['ITIL'],
  },
  {
    title: 'Incident Management',
    competency: 5,
    category: ['ITIL'],
  },
  {
    title: 'Change Management',
    competency: 5,
    category: ['ITIL'],
  },
  {
    title: 'Problem Management',
    competency: 5,
    category: ['ITIL'],
  },
  {
    title: 'Jira Service Desk',
    competency: 5,
    category: ['ITIL', 'Service Desk'],
  },
  {
    title: 'Zendesk',
    competency: 5,
    category: ['ITIL', 'Service Desk'],
  },
  {
    title: 'Freshdesk',
    competency: 4,
    category: ['ITIL', 'Service Desk'],
  },
  {
    title: 'Salesforce',
    competency: 3,
    category: ['ITIL', 'Service Desk'],
  },
  {
    title: 'ITRS / Geneos',
    competency: 3,
    category: ['ITIL', 'Service Desk'],
  },
  {
    title: 'PagerDuty',
    competency: 3,
    category: ['ITIL', 'Service Desk'],
  },
  {
    title: 'Incident.io',
    competency: 3,
    category: ['ITIL'],
  },
  {
    title: 'Rootly',
    competency: 3,
    category: ['ITIL'],
  },
  {
    title: 'Amazon Web Services (AWS)',
    competency: 2,
    category: ['Cloud'],
  },
  {
    title: 'Azure',
    competency: 2,
    category: ['Cloud'],
  },
  {
    title: 'Google Cloud Platform (GCP)',
    competency: 2,
    category: ['Cloud'],
  },
  {
    title: 'Relational Databases Oracle/PostgreSQL/SQLite3/SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'No SQL Databases: Mongo/Redis/Cassandra etc',
    competency: 1,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'C#',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Javascript',
    competency: 1,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'React',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'HTML',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 1,
    category: ['Languages', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
