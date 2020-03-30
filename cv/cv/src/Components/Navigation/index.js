import React from 'react';
import { Tabs, Tab, Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './styles';

function allyProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

export default function Navigation({ value, handleChange }) {
  const classes = useStyles();

  return (
    <div className={classes.navigation}>
      <Avatar alt="Oleg" src="" className={classes.large} />

      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
      >
        <Tab label="About" {...allyProps(0)} />
        <Tab label="Experience" {...allyProps(1)} />
        <Tab label="Interests" {...allyProps(2)} />
        <Tab label="Work" {...allyProps(3)} />
      </Tabs>
    </div>
  );
}

Navigation.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func
};