import React from "react"
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import navigationLinks from 'components/navigation/navigationLinks'
import Backdrop from "components/backdrop"

const Drawer = ({ isOpen, onClose, location }) => {
  let classesDrawer = 'drawer'
  classesDrawer = isOpen ? `${classesDrawer} drawer__open` : classesDrawer

  const activeLink = location.pathname === '/'
    ? location.pathname
    : location.pathname.slice(1) || undefined

  let classesLink = 'drawer__link'

  const renderLink = (link, index) => {
    const linkName = link === '/' ? 'Phones' : link
    link = link.toLowerCase()
    
    classesLink = link === activeLink
    ? `${classesLink} active-link`
    : 'drawer__link'
    
    link = link === '/' ? '' : link
    return (
      <Link
        key={index}
        to={`/${link}`}
        className={classesLink}
        onClick={onClose}
      >
        {linkName}
      </Link>
    )
  }

  return (
    <div>
      <div className={classesDrawer}>
        {navigationLinks.map((link, index) => renderLink(link, index))}
      </div>
      {isOpen && <Backdrop onClose={onClose} />}
    </div>
  )
}

export default withRouter(Drawer)