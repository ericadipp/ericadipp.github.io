import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import School from '../components/Resume/School';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import Project from '../components/Resume/Project';

import courses from '../data/resume/courses';
import school from '../data/resume/classes';
import roles from '../data/resume/leadership';
import projects from '../data/resume/projects';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';
import Leadership from '../components/Resume/Leadership';
const { PUBLIC_URL } = process.env;

const sections = [
  'Technical Skills',
  'Education',
  'Technical Projects',
  'Experience',
  'Technical Courses',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Erica Dippold's Resume."
  >
    <article className="post" id="resume">
      <header>

        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Erica's Resume</Link></h2>
          <div>
          <a href={`${PUBLIC_URL}/images/Erica Dippold Resume.pdf`} download="EricaResume">Download a PDF copy</a>
          </div>
          {/* <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}

          </div> */}
        </div>
      </header>

      <Courses data={courses} />
      <Education data={degrees} />
      <Project data={projects} />
      <Experience data={positions} />
      <Leadership data={roles} />
      {/* <Skills skills={skills} categories={categories} /> */}
      <School data={school} />
      <References />

    </article>
  </Main>
);

export default Resume;
