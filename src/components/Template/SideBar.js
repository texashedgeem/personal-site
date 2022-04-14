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
      <p>Hi, I&apos;m <a href="https://www.linkedin.com/in/simonhewins/"> Simon </a> - the founder, CEO, CTO, Architect, Engineer, Manager, Developer, Designer, DevOps Lead, and Tea-boy at <a href="http://qeetoto.com">Qeeoto</a>. I and my collegues like building things and connecting with people like you.  We are large network of link-minded people who enjoy working on stuff.  Message me and lets have a chat.
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
