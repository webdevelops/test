import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Drawer from './Drawer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 35,
    height: 35
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => setOpenMenu(!openMenu)

  const toggleDrawer = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setOpenMenu(false)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <IconButton onClick={toggleMenu} edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Drawer toggleDrawer={toggleDrawer} open={openMenu} />
        </Toolbar>
      </AppBar>
    </div>
  )
}