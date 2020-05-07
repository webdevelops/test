import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from '../../../components/ProjectCard';
import image from './quiz.jpg';
import Spinner from '../../../components/Spinner';

export default function Quiz({ quiz }) {
  if (!image) {
    return <Spinner />
  }

  return (
    <ProjectCard 
      title={quiz.title}
      description={quiz.description}
      url={quiz.url}
      image={image}
      techList={quiz.techList}
    />
  );
}

Quiz.propTypes = {
  quiz: PropTypes.object
};