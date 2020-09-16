import React from 'react';
import { makeStyles, Typography, Box, Link } from '@material-ui/core';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import PhoneInTalkTwoToneIcon from '@material-ui/icons/PhoneInTalkTwoTone';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      height: '95vh',
    },
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& h1': {
      marginBottom: theme.spacing(3),
      color: theme.palette.grey[700],
      lineHeight: 1,
      '& span': {
        color: theme.palette.success.main,
      },
    },
    '& h6': {
      fontSize: '1.4rem',
      [theme.breakpoints.down('xs')]: {
        fontSise: '1rem',
      },
      color: theme.palette.grey[600],
      textAlign: 'left',
      marginBottom: theme.spacing(3),
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
    '& > div': {
      textAlign: 'right'
    }
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">
        Oleg <span>Ostrikov</span>
      </Typography>

      <Typography variant="h6">
        <span>Rivne, Ukraine</span>
        <Box
          component="p"
          color="text.secondary"
          fontSize={{ xs: 'h6.fontSize', sm: 'h5.fontSize' }}
          m={0}
        >
          <PhoneInTalkTwoToneIcon />
          <Link href="tel:+380974754105">+38 (097) 47-54-105</Link>
        </Box>

        <Box>
          <MailTwoToneIcon />
          <Link href="mailto:oleg1ostrikov@gmail.com">oleg1ostrikov@gmail.com</Link>
        </Box>
      </Typography>

      <Box
        component="p"
        color="text.secondary"
        fontSize={{ xs: 'h5.fontSize', sm: 'h4.fontSize' }}
      >
        I'm obsessed with making things and even more obsessed with making things better. I am a self taught web developer
      </Box>

      <Box>
        <Link href="https://github.com/webdevelops/practice/blob/master/cv/pdf/en/CV.pdf">Want to know more? Welcome...</Link>
      </Box>
    </div>
  );
}