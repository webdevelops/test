import React from 'react';
import { Card, CardActionArea, Link, CardHeader, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './styles';

export default function ProjectCard(props) {
  const { title, description, url, image, techList, linkSource } = props;
  const classes = useStyles();

  const list = (
    techList.map((tech, index) => {
      const text = (tech === 'Git') ? linkSource : tech;

      return (
        <li key={index}>{text}</li>
      );
    })
  );

  return (
    <div className={classes.root}>
      <Card raised className={classes.card}>
        <CardHeader
          title={title}
          subheader={description}
        />
        <CardActionArea>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title} />
          </Link>
        </CardActionArea>
        <CardContent>
          <Typography variant="h5">
            Tech Used
          </Typography>
          <ul>
            {list}
          </ul>
        </CardContent>
      </Card>
    </div >
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
  url: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired, 
  techList: PropTypes.arrayOf(PropTypes.string).isRequired, 
  linkSource: PropTypes.element
};