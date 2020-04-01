import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    padding: '0 50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& h2': {
      color: theme.palette.grey[800],
      marginBottom: theme.spacing(5),
    },
    '& h4': {
      color: theme.palette.grey[800],
    },
    '& h6': {
      color: theme.palette.grey[600],
      marginBottom: theme.spacing(1.5),
      textTransform: 'uppercase',
    },
    '& time': {
      color: theme.palette.success.main,
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 20px',
    },
  },
}));

export default function Experience() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2">
        Experience
      </Typography>

      <Box mb={4}>
        <Typography variant="h4">
          Freelance
        </Typography>
        <Typography variant="h6">
          PSD-TO-HTML
        </Typography>
        <time>Aug 2017 - present</time>
      </Box>

      <Box>
        <Typography variant="h4">
          Sales
        </Typography>
        <Typography variant="h6">
          Sale of computer equipment
        </Typography>
        <time>Jan 2008 - Jun 2017</time>
      </Box>
    </div>
  );
}