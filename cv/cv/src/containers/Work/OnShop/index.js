import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@material-ui/core';

import ProjectCard from '../../../components/ProjectCard';
import Spinner from '../../../components/Spinner';
import image from './onShop.jpg';

export default function OnShop({ onShop }) {
  const linkSource = (
    <Link
      href='https://github.com/webdevelops/examples/tree/master/Shop'
      target="_blank"
      rel="noopener noreferrer"
    >
      Git (source here)
    </Link>
  );

  if (!image) {
    return <Spinner />
  }

  return (
    <div>
      <ProjectCard
        title={onShop.title}
        description={onShop.description}
        url={onShop.url}
        image={image}
        techList={onShop.techList}
        linkSource={linkSource}
      />
    </div>
  )
}

OnShop.propTypes = {
  onShop: PropTypes.object
}