import React, { useState } from 'react';
import { AppBar, Tabs, Tab, makeStyles } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import { projects } from '../../data/projects';
import TabPanel from '../../components/TabPanel';
import Lawyer from './Lawyer';
import Quiz from './Quiz';
import Store from './Store';
import OnShop from './OnShop';

function allyProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1000,
    position: 'relative',
    '& .MuiAppBar-positionFixed': {
      position: "static",
    },
    '& .MuiTabs-indicator': {
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
          variant="scrollable"
          scrollButtons="auto"
          aria-label="full width tabs example"
        >
          <Tab label="onShop" {...allyProps(0)} />
          <Tab label="Store" {...allyProps(1)} />
          <Tab label="Quiz" {...allyProps(2)} />
          <Tab label="Lawyer" {...allyProps(3)} />
        </Tabs>
      </AppBar>

      <SwipeableViews
        axis={'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <OnShop onShop={projects.onShop} />
          {/* <onShop store={projects.store} /> */}
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Store store={projects.store} />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Quiz quiz={projects.quiz} />
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Lawyer lawyer={projects.lawyer} />
        </TabPanel>
      </SwipeableViews>
      
    </div>
  );
}