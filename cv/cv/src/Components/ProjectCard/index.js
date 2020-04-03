import React from 'react';
import { Card, CardActionArea, Link, CardHeader, CardContent, Typography } from '@material-ui/core';

import useStyles from './styles';

export default function ProjectCard(props) {
  const { title, description, url, image, techList } = props;
  const classes = useStyles();

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
            {techList.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div >
  );
}