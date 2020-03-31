import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { DrawerLeft } from './DrawerLeft';
import { MainContent } from './MainContent';
import { Sidebar } from './Sidebar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: '0 20px',
  },
  menuButton: {
    position: 'fixed',
    color: '#16792D',
  },
  content: {
    matginTop: 20,
    marginLeft: 40,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 250
    },
  },
  sectionMobile: {
    [theme.breakpoints.up("sm")]: {
      display: 'none'
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up("sm")]: {
      display: 'flex'
    },
  },
}));

function App() {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false
  });

  // const [links, setLinks] = useState([
  //   { name: 'about', active: false },
  //   { name: 'experience', active: false },
  //   { name: 'interests', active: false },
  //   { name: 'work', active: false }
  // ]);

  // const handleActiveLink = name => event => {
  //   const newLinks = links;

  //   newLinks.forEach(link => {
  //     link.active = false;
  //     if (link.name === name) {
  //       link.active = true;
  //     }
  //   });
  //   setLinks([...newLinks]);
  // };

  const toggleDrawer = (anchor, open) => event => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.sectionMobile}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          className={classes.menuButton}
          onClick={toggleDrawer('left', true)}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <DrawerLeft open={state.left} toggleDrawer={toggleDrawer} />

      <div className={classes.sectionDesktop}>
        <Sidebar open={true} /* handleActiveLink={handleActiveLink} links={links} */ />
      </div>
      <main className={classes.content}>
        <MainContent />
      </main>
    </div>
  );
}

export default App;