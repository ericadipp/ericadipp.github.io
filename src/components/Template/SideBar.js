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
        <h2>Erica Dippold</h2>
        <p><a href="mailto:ericavdippold@gmail.com">ericavdippold@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Erica. I like productivity, learning, and optimizing processes. One of my favorite things to do is ask myself, <i>"how can I make this process more efficient?" </i>
         and with that I continue to iterate and iterate until a system of efficiency is designed. I believe in long-term thinking, continuous self-improvement, and utilizing mental models for efficient thinking.
        <br>
        </br>
        <br>
        </br>
        I am currently a Software Engineer who previously worked in Finance. I enjoy utilizing my Finance domain knowledge in tandem with my techincal skillsets
        to enhance productivity and build products for both finance and technical teams.
        </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Erica Dippold 2022.</p>
    </section>
  </section>
);

export default SideBar;
