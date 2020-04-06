import React, { useState } from 'react';
import { CssBaseline, IconButton, makeStyles, AppBar, Toolbar } from '@material-ui/core';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';

import './App.css';
import TabPanel from './components/TabPanel';
import Navigation from './components/Navigation';
import MobileNavigation from './components/MobileNavigation';
import About from './containers/About';
import Experience from './containers/Experience';
import Interests from './containers/Interests';
import HideOnScroll from './components/HideOnScroll';
import Work from './containers/Work';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  sectionMobile: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    padding: '0 20px',
  },
  buttonMenu: {
    color: 'white',
    '&:hover': {
      background: theme.palette.success.light,
    }
  },
  sectionDesctop: {
    display: 'none',
    width: '30%',
    maxWidth: theme.spacing(40),
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  tabpanel: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3),
    },
    width: '70%',
    padding: theme.spacing(0, 7),
  },
}));

export default function App(props) {
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
        <HideOnScroll {...props}>
          <AppBar color="primary">
            <Toolbar>
              <IconButton
                edge="start"
                color="primary"
                aria-label="open drover-navigation"
                className={classes.buttonMenu}
                onClick={toggleDrawer('left', true)}
              >
                <MenuOpenRoundedIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />

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
        <TabPanel value={value} index={0} className="slidein">
          <About />
        </TabPanel>
        <TabPanel value={value} index={1} className="slidein">
          <Experience />
        </TabPanel>
        <TabPanel value={value} index={2} className="slidein">
          <Interests />
        </TabPanel>
        <TabPanel value={value} index={3} className="slidein">
          <Work />
        </TabPanel>
      </div>
    </div>
  );
}