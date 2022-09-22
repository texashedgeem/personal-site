import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Simon Hewins</h2>
        <p><a href="mailto:simon.hewins@qeetoto.com">simon.hewins@qeetoto.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m <a href="https://www.linkedin.com/in/simonhewins/"> Simon </a> - the founder and CEO, at <a href="http://qeetoto.com">Qeeoto</a>.  As I have built the company I have fulfilled nearly all roles required in a start up: CTO, Architect, Engineer, Manager, Developer, Designer, DevOps Lead, and all other possible roles.   I and my collegues like building things and connecting with people like you.  We are a close network of like-minded people who enjoy working on technology projects outside of our regular day-job.  If this sounds like something that interests you then please message me and lets have a chat.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Simon Hewins<Link to="/">qeetoto.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
