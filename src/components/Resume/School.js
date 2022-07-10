import React from 'react';
import PropTypes from 'prop-types';

import Class from './School/Class';

const getRows = (classes) => classes.sort((a, b) => {
  let ret = 0;
  if (a.name > b.name) ret = -1;
  else if (a.name < b.name) ret = 1;
  return ret;
}).map((course, idx) => (
  <Class
    data={course}
    key={course.title}
    last={idx === course.length - 1}
  />
));

const School = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Technical Courses</h3>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
  </div>
);

School.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })),
};

School.defaultProps = {
  data: [],
};

export default School;
