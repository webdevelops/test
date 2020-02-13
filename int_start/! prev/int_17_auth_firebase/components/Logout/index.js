import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { logout } from 'actions'

const Logout = ({ logout }) => {
  useEffect(() => {
    logout()
  })
  return (
    <Redirect to='/' />
  )
}

const mapDispatchToProps = {
  logout
}

Logout.propTypes = {
  logout: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Logout)