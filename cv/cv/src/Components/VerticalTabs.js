import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function allyProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
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
      <TabPanel value={value} index={0}>
        About
      </TabPanel>
      <TabPanel value={value} index={1}>
        Experience
      </TabPanel>
      <TabPanel value={value} index={2}>
        Interests
      </TabPanel>
      <TabPanel value={value} index={3}>
        Work
      </TabPanel>
    </div>
  );
}