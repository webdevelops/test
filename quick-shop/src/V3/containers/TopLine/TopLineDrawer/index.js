import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SmartphoneTwoToneIcon from '@material-ui/icons/SmartphoneTwoTone';
import ShoppingBasketTwoToneIcon from '@material-ui/icons/ShoppingBasketTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import MeetingRoomTwoToneIcon from '@material-ui/icons/MeetingRoomTwoTone';
import { Link } from 'react-router-dom';

import useStyles from '../topLineStyles';
import { connect } from 'react-redux';
    
const TopLineDrawer = ({ open, toggleDrawer, isAuthenticated }) => {
  const classes = useStyles();

  const links = isAuthenticated
    ? [
      { to: '/', label: 'Phones', icon: <SmartphoneTwoToneIcon style={{ color: 'orange' }} /> },
      { to: '/basket', label: 'Basket', icon: <ShoppingBasketTwoToneIcon style={{ color: 'green' }} /> },
      { to: '/logout', label: 'Logout', icon: <MeetingRoomTwoToneIcon style={{ color: '#0277bd' }} /> }
    ]
    : [
      { to: '/', label: 'Phones', icon: <SmartphoneTwoToneIcon style={{ color: 'orange' }} /> },
      { to: '/basket', label: 'Basket', icon: <ShoppingBasketTwoToneIcon style={{ color: 'green' }} /> },
      { to: '/sign-in', label: 'Sign In', icon: <ExitToAppTwoToneIcon style={{ color: '#0277bd' }} /> },
      { to: '/sign-up', label: 'Sign Up', icon: <PersonAddTwoToneIcon style={{ color: '#0277bd' }} /> }
    ];

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {links.map(link => (
          <Link to={link.to} className={classes.link} key={link.label}>
            <ListItem button >
              <ListItemIcon className={classes.linkIcon}>{link.icon}</ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.linkIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer anchor='left' open={open} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: Boolean(state.auth.token)
  };
};

export default connect(mapStateToProps)(TopLineDrawer)