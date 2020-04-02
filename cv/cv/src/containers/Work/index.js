import React, { useState } from 'react';
import { Typography, Box, AppBar, Tabs, Tab } from '@material-ui/core';

import { projects } from '../../data/projects';
import Lawyer from './Lawyer';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function allyProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Work() {
  const [valuem, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Lawyer" />
        </Tabs>
      </AppBar>
      <Lawyer lawyer={projects.lawyer} />
    </div>
  );
}