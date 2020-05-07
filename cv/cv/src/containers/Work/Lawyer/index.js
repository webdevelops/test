import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from '../../../components/ProjectCard';
import image from './lawyer.jpg';
import Spinner from '../../../components/Spinner';

export default function Lawyer({ lawyer }) {
  if (!image) {
    return <Spinner />
  }
  
  return (
    <ProjectCard
      title={lawyer.title}
      description={lawyer.description}
      url={lawyer.url}
      image={image}
      techList={lawyer.techList}
    />
  );
}

Lawyer.propTypes = {
  lawyer: PropTypes.object
};