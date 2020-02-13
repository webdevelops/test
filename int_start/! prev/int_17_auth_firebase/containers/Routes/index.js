import React, { useEffect } from 'react'
// --- for {ConnectedRouter}                   - import {Switch, Router, Link, etc.} from 'react-router'
// --- for {Router, BrowserRouter, HashRouter} - import { Switch, Route, Link, etc. } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Phones from 'containers/Phones'
import Phone from 'containers/Phone'
import Basket from 'containers/Basket'
import Auth from 'containers/Auth'
import Logout from 'components/Logout'
import { autoLogin } from 'actions'

const Routes = ({ isAuthenticated, autoLogin }) => {
  useEffect(() => {
    autoLogin()
  })

  const routes = isAuthenticated
    ? (
      <Switch>
        <Route exact path='/' component={Phones} />
        <Route path='/phones/:id' component={Phone} />
        <Route path='/categories/:id' component={Phones} />
        <Route path='/basket' component={Basket} />
        {/* <Route path='/authorization' component={Auth} /> */}
        <Route path='/logout' component={Logout} />
        <Redirect to='/' />
      </Switch>
    )
    : (
      <Switch>
        <Route exact path='/' component={Phones} />
        <Route path='/phones/:id' component={Phone} />
        <Route path='/categories/:id' component={Phones} />
        <Route path='/basket' component={Basket} />
        <Route path='/authorization' component={Auth} />
        <Redirect to='/' />
      </Switch>
    )

  return routes
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.token
  }
}

const mapDispatchToProps = {
  autoLogin
}

Routes.propTypes = {
  isAuthenticated: PropTypes.bool,
  autoLogin: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)