import React from 'react';
import { Drawer, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Navigation from '../Navigation';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    '& .MuiDrawer-paper': {
      minWidth: theme.spacing(22),
    },
  },
}));

export default function MobileNavigation(props) {
  const { value, handleChange, open, toggleDrawer } = props;
  const classes = useStyles();

  return (
    <Drawer
      className={classes.root}
      anchor={'left'}
      open={open}
      onClick={toggleDrawer('left', false)}
    >
      <Navigation value={value} handleChange={handleChange} />
    </Drawer>
  );
}

MobileNavigation.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func,
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func
};