import React from 'react';
import { makeStyles, Typography, Box, Link } from '@material-ui/core';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import PhoneInTalkTwoToneIcon from '@material-ui/icons/PhoneInTalkTwoTone';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    paddingLeft: 50,
    '& h1': {
      fontFamily: '"Helvetica Neue"',
      textTransform: 'uppercase',
      marginBottom: theme.spacing(3),
      color: theme.palette.grey[700],
      '& span': {
        color: theme.palette.success.main,
      },
    },
    '& h6': {
      fontFamily: '"Helvetica Neue"',
      color: theme.palette.grey[600],
      fontSize: '1.5rem',
      textAlign: 'left',
      marginBottom: theme.spacing(4),
      '& span': {
        color: theme.palette.success.main,
      },
      '& svg': {
        marginRight: theme.spacing(1),
        color: theme.palette.success.main,
        verticalAlign: 'text-bottom',
      },
      '& a': {
        color: theme.palette.success.main,
      },
    },

  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">
        David <span>Amunga</span>
        {/* Oleg <span>Ostrikov</span> */}
      </Typography>

      <Typography variant="subtitle1">
        <span>Rivne, Ukraine</span>
        <Box>
          <PhoneInTalkTwoToneIcon />
          <Link href="tel:+380974754105">+38 (097) 47-54-105</Link>
        </Box>

        <Box>
          <MailTwoToneIcon />
          <Link href="mailto:oleg1ostrikov@gmail.com">oleg1ostrikov@gmail.com</Link>
        </Box>
      </Typography>

      <Typography variant="subtitle2">
        I'm obsessed with making things and even more obsessed with making things better. I am a self taught web developer
      </Typography>
    </div>
  );
}