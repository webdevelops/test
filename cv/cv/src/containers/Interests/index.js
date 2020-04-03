import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      height: '95vh',
    },
    height: '100vh',
    // padding: '0 50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& h2': {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 20px',
    },
  },
}));

export default function Interests() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2">
        Interests
      </Typography>

      <Box
        mb={0} component="p"
        color="text.secondary"
        fontSize={{xs: 'h5.fontSize', sm: 'h4.fontSize'}}
      >
        Apart from being a web developer, I enjoy most of my time  learning English, I am fond of tennis and badminton.
      </Box>

      <Box
        component="p"
        color="text.secondary"
        fontSize={{xs: 'h5.fontSize', sm: 'h4.fontSize'}}
      >
        When indoors, I follow a number of sci-fi and fantasy genre movies and television shows, and I spend a large amount of my free time exploring the latest technology advancements in the web development world.
      </Box>
    </div>
  );
}