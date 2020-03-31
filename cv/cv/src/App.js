import React, { useState } from 'react';
import { CssBaseline, IconButton, makeStyles } from '@material-ui/core';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';

import './styles.css';
import TabPanel from './Components/TabPanel';
import Navigation from './Components/Navigation';
import MobileNavigation from './Components/MobileNavigation';
import About from './Components/About';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  sectionMobile: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  sectionDesctop: {
    display: 'none',
    width: '30%',
    maxWidth: theme.spacing(40),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [state, setState] = useState({ 'left': false });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (side, open) => event => {
    setState({ ...state, [side]: open });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <div className={classes.sectionMobile}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drover-navigation"
          className={classes.buttonMenu}
          onClick={toggleDrawer('left', true)}
        >
          <MenuOpenRoundedIcon />
        </IconButton>

        <MobileNavigation
          value={value}
          open={state.left}
          handleChange={handleChange}
          toggleDrawer={toggleDrawer}
        />
      </div>

      <div className={classes.sectionDesctop}>
        <Navigation value={value} handleChange={handleChange} />
      </div>

      <div className={classes.tabpanel}>
        <TabPanel value={value} index={0} hello={'...other - additionalProps'} className="slidein">
          <About />
        </TabPanel>
        <TabPanel value={value} index={1} className="slidein">
          Experience
        </TabPanel>
        <TabPanel value={value} index={2} className="slidein">
          Interests
        </TabPanel>
        <TabPanel value={value} index={3} className="slidein">
          Work
        </TabPanel>
      </div>
    </div>
  );
}