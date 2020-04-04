import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from '../../components/ProjectCard';

export default function Lawyer({ lawyer }) {
  return (
    <ProjectCard
      title={lawyer.title}
      description={lawyer.description}
      url={lawyer.url}
      image={lawyer.image}
      techList={lawyer.techList}
    />
  );
}

Lawyer.propTypes = {
  store: PropTypes.objectOf(PropTypes.object)
};