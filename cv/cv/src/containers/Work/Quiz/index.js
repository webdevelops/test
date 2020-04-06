import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from '../../../components/ProjectCard';
import image from './quiz.jpg';

export default function Quiz({ quiz }) {
  return (
    <ProjectCard 
      title={quiz.title}
      description={quiz.description}
      url={quiz.url}
      // image={quiz.image}
      image={image}
      techList={quiz.techList}
    />
  );
}

Quiz.propTypes = {
  store: PropTypes.objectOf(PropTypes.object)
};