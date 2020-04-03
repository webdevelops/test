import React from 'react';

import ProjectCard from '../../components/ProjectCard';

export default function Quiz({ quiz }) {
  console.log("Quiz -> quiz", quiz)
  return (
    <ProjectCard 
      title={quiz.title}
      description={quiz.description}
      url={quiz.url}
      image={quiz.image}
      techList={quiz.techList}
    />
  );
}