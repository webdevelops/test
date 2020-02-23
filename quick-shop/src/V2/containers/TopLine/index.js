import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './useStyles';
import TopLineDrawer from './TopLineDrawer';
import ToggleSwitch from './ToggleSwitch';

export default function TopLine() {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  const [signUp, setSignUp] = useState(false)
  const handleChange = event => setSignUp(event.target.checked)

  return (
    <div className={classes.root}>
      <AppBar /*  position="static" */>
        <Toolbar>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Quick Shop
          </Typography>

          <TopLineDrawer open={openDrawer} toggleDrawer={toggleDrawer} />

          <ToggleSwitch signUp={signUp} handleChange={handleChange} />

          <Button color="inherit">Login</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
};