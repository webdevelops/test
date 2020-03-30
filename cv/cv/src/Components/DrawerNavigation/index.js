import React from 'react';
import { Drawer, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Navigation from '../Navigation';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    '& .MuiDrawer-paper': {
      width: '33%',
      minWidth: 150,
    },
  },
}));

export default function DrawerNavigation(props) {
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

Navigation.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func,
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func
};