import React from 'react';

import ProjectCard from '../../components/ProjectCard';

export default function Store({ store }) {
  return (
    <ProjectCard
      title={store.title}
      description={store.description}
      url={store.url}
      image={store.image}
      techList={store.techList}
    />
  );
}