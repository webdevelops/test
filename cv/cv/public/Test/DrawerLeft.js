import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Drawer } from '@material-ui/core';
import { Link } from 'react-scroll';

const useStyles = makeStyles(theme => ({
  drawer: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    '& > .MuiPaper-root': {
      background: '#16792D',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textTransform: 'uppercase',
    },
    '& li': {
      justifyContent: 'center',
      cursor: "pointer",
      padding: '5px 16px',
    },
    '& a': {
      opacity: .5,
      transition: '.3s',
    },
    '& a.active': {
      opacity: 1,
    },
  },
  list: {
    width: 250
  },
}));

export const DrawerLeft = ({ open, toggleDrawer }) => {
  const classes = useStyles();
  const links = ['about', 'experience', 'interests', 'work'];

  const sideList = side => (
    <div className={classes.list}>
      <List>
        {links.map((link, index) => (
          <ListItem key={link}>
            <Link
              activeClass="active"
              to={`section${index + 1}`}
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <ListItemText primary={link} onClick={toggleDrawer(side, false)} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      className={classes.drawer}
      anchor={'left'}
      open={open}
      onClick={toggleDrawer('left', false)}
    >
      {sideList('left')}
    </Drawer>
  );
};