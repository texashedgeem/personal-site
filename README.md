# Simon Hewins — Personal Website

> **Note for developers:** This repo is a personal fork of [mldangelo/personal-site](https://github.com/mldangelo/personal-site). It has been heavily customised with personal content and is no longer kept in sync with the upstream template. **If you are looking to build your own personal site, please clone Michael's original repo** — it is actively maintained, has been migrated to Next.js + TypeScript + Tailwind CSS, and is far more up to date than this fork.
>
> 👉 [https://github.com/mldangelo/personal-site](https://github.com/mldangelo/personal-site)

---

## About This Repo

This is the source code for [simonhewins.co.uk](https://simonhewins.co.uk) — my personal website.

It is based on an [MIT licensed](https://github.com/mldangelo/personal-site/blob/main/LICENSE) React/Jamstack template originally created by [Michael D'Angelo](https://github.com/mldangelo). The template uses [Create React App](https://github.com/facebook/create-react-app), [React Router](https://reactrouter.com/), SCSS, and deploys automatically via [GitHub Actions](https://github.com/features/actions) to [GitHub Pages](https://pages.github.com/).

This fork was last synced with upstream in **2020** and has since diverged significantly. In 2026 the fork was detached from Michael's repo entirely as the upstream had migrated to a completely different stack (Next.js, TypeScript, Tailwind CSS).

## Tech Stack

- [React](https://reactjs.org/) with [React Router v6](https://reactrouter.com/)
- SCSS (based on the [Future Imperfect](https://html5up.net/future-imperfect) theme by [@ajlkn](https://github.com/ajlkn))
- [GitHub Actions](https://github.com/features/actions) CI/CD
- [GitHub Pages](https://pages.github.com/) hosting
- Custom domain: [simonhewins.co.uk](https://simonhewins.co.uk)

## Running Locally

Requires [Node.js](https://nodejs.org/) v20 (see `.nvmrc`).

```bash
git clone git@github.com:texashedgeem/personal-site.git
cd personal-site
nvm install
npm install
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Deployment

Pushing to `main` triggers the GitHub Actions workflow which builds and deploys automatically to GitHub Pages.

## Acknowledgements

All credit for the original template goes to [Michael D'Angelo](https://github.com/mldangelo) — please visit and star his repo if you find this useful:
[https://github.com/mldangelo/personal-site](https://github.com/mldangelo/personal-site)

- Template design based on [Future Imperfect](https://html5up.net/future-imperfect) by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](https://html5up.net).
- Thanks to [@typpo](https://github.com/typpo) for the original Node.js and React guidance on Michael's project.
