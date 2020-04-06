import React from 'react';
import { Link } from '@material-ui/core';
import PropTypes from 'prop-types';

import ProjectCard from '../../../components/ProjectCard';
import image from './store.jpg';

export default function Store({ store }) {
  const linkSource = (
    <Link
      href='https://github.com/webdevelops/q-shop'
      target="_blank"
      rel="noopener noreferrer" >
      Git (hosting - source here)
    </Link>
  );

  return (
    <div>
      <ProjectCard
        title={store.title}
        description={store.description}
        url={store.url}
        // image={store.image}
        image={image}
        techList={store.techList}
        linkSource={linkSource}
      />
    </div>
  );
}

Store.propTypes = {
  store: PropTypes.object
};