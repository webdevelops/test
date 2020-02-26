import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import MeetingRoomTwoToneIcon from '@material-ui/icons/MeetingRoomTwoTone';
import { connect } from 'react-redux';

import useStyles from '../useStyles';

const TopLineDrawer = ({ toggleDrawer, open, isAuthenticated }) => {
  const classes = useStyles();

  const links = isAuthenticated
    ? [
      { to: '/', label: 'Phones', icon: <SmartphoneIcon style={{ color: 'orange' }} /> },
      { to: '/basket', label: 'Basket', icon: <ShoppingBasketIcon style={{ color: 'green' }} /> },
      { to: '/logout', label: 'Logout', icon: <MeetingRoomTwoToneIcon style={{ color: '#0277bd' }} /> }
    ]
    : [
      { to: '/', label: 'Phones', icon: <SmartphoneIcon style={{ color: 'orange' }} /> },
      { to: '/basket', label: 'Basket', icon: <ShoppingBasketIcon style={{ color: 'green' }} /> },
      { to: '/sign-in', label: 'Sign In', icon: <ExitToAppTwoToneIcon style={{ color: '#0277bd' }} /> },
      { to: '/sign-up', label: 'Sign Up', icon: <PersonAddTwoToneIcon style={{ color: '#0277bd' }} /> }
    ];

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {links.map(link => (
          <Link to={link.to} className={classes.link} key={link.label}>
            <ListItem button>
              <ListItemIcon className={classes.linkItem}>{link.icon}</ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.token
  }
};

export default connect(mapStateToProps)(TopLineDrawer)