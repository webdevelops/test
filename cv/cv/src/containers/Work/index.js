import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {

  }
}));

export default function Work() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Work
    </div>
  );
}