import React from 'react';

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