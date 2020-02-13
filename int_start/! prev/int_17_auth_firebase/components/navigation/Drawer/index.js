import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Backdrop from 'components/Backdrop'

const Drawer = ({ 
  isOpen, location, 
  onCloseMenu, isAuthenticated 
}) => {
  
  const links = isAuthenticated
    ? [
      { to: '/', label: 'Phones' },
      { to: '/basket', label: 'Basket' },
      { to: '/logout', label: 'Logout' }
    ]
    : [
      { to: '/', label: 'Phones' },
      { to: '/basket', label: 'Basket' },
      { to: '/authorization', label: 'Authorization' }
    ]

  const activeLink = location.pathname

  const renderLink = (link, index) => {
    const classesLink = link.to === activeLink
      ? 'drawer__link active'
      : 'drawer__link'

    return (
      <Link
        key={index}
        to={link.to}
        className={classesLink}
        onClick={onCloseMenu}
      >
        {link.label}
      </Link>
    )
  }

  let classesDrawer = 'drawer'
  classesDrawer = isOpen
    ? `${classesDrawer} open`
    : classesDrawer

  return (
    <div>
      <nav className={classesDrawer}>
        {links.map((link, index) => renderLink(link, index))}
      </nav>
      {isOpen && <Backdrop onCloseMenu={onCloseMenu} />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.token
  }
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  location: PropTypes.object,
  onCloseMenu: PropTypes.func,
  isAuthenticated: PropTypes.bool
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Drawer)