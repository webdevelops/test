import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import useStyles from './useStyles';
import TopLineDrawer from './TopLineDrawer';
import ToggleSwitch from './ToggleSwitch';
import { Menu, MenuItem } from '@material-ui/core';

const TopLine = ({ history }) => {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  const [signIn, setSignUp] = useState(false);
  const handleChange = event => {
    if (signIn) {
      history.push("/");

    } else {
      history.push("/sign-in");
    }

    setSignUp(event.target.checked);
  }

  const links = [
    { to: "/sign-in", label: "Sign In" },
    { to: "/sign-up", label: "Sign Up" }
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMobileMenuOpen = event => setAnchorEl(event.currentTarget);
  const handleMobilemenuClose = () => setAnchorEl(null);

  const renderMobileMenu = (
    <Menu
      id="mobile-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      className={classes.mobileList}
      onClose={handleMobilemenuClose}
    >
      {links.map(link => (
        <MenuItem key={link.label}>
          <Link to={link.to} onClick={handleMobilemenuClose} className={classes.mobileLink}>
            {link.label}
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );

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

          <div className={classes.sectionDeskTop}>
            <ToggleSwitch signIn={signIn} handleChange={handleChange} />

            <Link to="/sign-up" className={classes.signUp}>Sign Up</Link>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="more"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreVertIcon className={classes.moreIcon} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default withRouter(TopLine)