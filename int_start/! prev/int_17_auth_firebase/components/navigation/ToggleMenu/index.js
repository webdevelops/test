import React from 'react'

const ToggleMenu = ({ isOpen, onToggleMenu }) => {
  let classes = 'fas fa-'
  classes = isOpen
    ? `${classes}times`
    : `${classes}bars`

  return (
    <div className='toggle-menu'>
      <i className={classes} onClick={onToggleMenu}></i>
    </div>
  )
}

export default ToggleMenu