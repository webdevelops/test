import React, { useState } from 'react';
import { AppBar, Tabs, Tab, makeStyles } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import { projects } from '../../data/projects';
import TabPanel from '../../components/TabPanel';
import Lawyer from './Lawyer';
import Quiz from './Quiz';
import Store from './Store';

function allyProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    '& .MuiAppBar-positionFixed': {
      position: "static",
    },
    '& .PrivateTabIndicator-colorSecondary-116': {
      background: theme.palette.success.main,
    },
    '& .MuiTab-wrapper': {
      fontWeight: 'bold',
    },
  },
}));

export default function Work() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Lawyer" {...allyProps(0)} />
          <Tab label="Quiz" {...allyProps(1)} />
          <Tab label="Store" {...allyProps(2)} />
        </Tabs>
      </AppBar>

      <SwipeableViews
        axis={'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <Lawyer lawyer={projects.lawyer} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Quiz quiz={projects.quiz} />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Store store={projects.store} />
        </TabPanel>
      </SwipeableViews>
      
    </div>
  );
}