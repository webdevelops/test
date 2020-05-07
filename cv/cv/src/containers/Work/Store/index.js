import React from 'react';
import { Link } from '@material-ui/core';
import PropTypes from 'prop-types';

import ProjectCard from '../../../components/ProjectCard';
import image from './store.jpg';
import Spinner from '../../../components/Spinner';

export default function Store({ store }) {
  const linkSource = (
    <Link
      href='https://github.com/webdevelops/q-shop'
      target="_blank"
      rel="noopener noreferrer" >
      Git (hosting - source here)
    </Link>
  );

  if (!image) {
    return <Spinner />
  }

  return (
    <div>
      <ProjectCard
        title={store.title}
        description={store.description}
        url={store.url}
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