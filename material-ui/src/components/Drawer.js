import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
// import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import MailIcon from '@material-ui/icons/Mail'
import { Link } from 'react-router-dom'
import SmartphoneIcon from '@material-ui/icons/Smartphone'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
// import LockOpenIcon from '@material-ui/icons/LockOpen'

const links = [
  { to: '/pnones', label: 'Phones', icon: <SmartphoneIcon color='primary' /> },
  { to: '/basket', label: 'Basket', icon: <ShoppingBasketIcon color='primary' /> },
  { to: '/signUp', label: 'Sign Up', icon: <i className='fas fa-user-plus'></i> }
]

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  link: {
    paddingLeft: 5,
    textDecoration: 'none',
    color: 'grey'
  }
}))

export default function TemporaryDrawer({ toggleDrawer, open }) {
  const classes = useStyles()

  const sideList = () => (
    <div
    className={classes.list}
    role='presentation'
    onClick={toggleDrawer}
    >
      <List>
        {links.map((link, index) => (
          <ListItem button key={index}>
            {link.icon}
            <Link to={link.to} className={classes.link} >
              <ListItemText primary={link.label}/>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <Drawer open={open} onClick={toggleDrawer}>
        {sideList('left')}
      </Drawer>
    </div>
  )
}