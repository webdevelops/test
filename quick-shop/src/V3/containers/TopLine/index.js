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
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const [signIn, setSignIn] = useState(false)
  const handleChange = event => setSignIn(event.target.checked)

  return (
    <div className={classes.root}>
      <AppBar /* position="static" */>
        <Toolbar>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            News
          </Typography>

          <TopLineDrawer open={state.left} toggleDrawer={toggleDrawer} />

          <ToggleSwitch signIn={signIn} handleChange={handleChange} />

          <Button color="inherit">Login</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}