import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/texashedgeem/personal-site
 */
const data = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/texashedgeem/personal-site/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/texashedgeem/personal-site/stargazers',
  },
  {
    label: 'Number of forks.  I know this is currently 0 - go ahead fork me! I am used to it at work.',
    key: 'forks',
    link: 'https://github.com/texashedgeem/personal-site/network',
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: 'https://github.com/texashedgeem/personal-site/issues',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/texashedgeem/personal-site/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '2115',
    link: 'https://github.com/texashedgeem/personal-site/graphs/contributors',
  },
];

export default data;
