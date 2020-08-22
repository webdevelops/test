import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import SignIn from './containers/auth/SignIn';
import SignUp from './containers/auth/SignUp';
import Recovery from './containers/auth/Recovery';
import Logout from './containers/auth/Logout';
import { autoLogin } from './store/actions/authActions';
import Phones from './containers/Phones';
import Phone from './containers/Phone';
import Basket from './containers/Basket';

const useStyles = makeStyles({
  root: {
    minWidth: 320,
  },
})

const Routes = ({ isAuthenticated, autoLogin }) => {
  const classes = useStyles();

  useEffect(() => {
    autoLogin();
  });

  const routes = isAuthenticated
    ? (
      <Switch>
        <Route path='/logout' component={Logout} />
        <Route exact path='/' component={Phones} />
        <Route path="/phones/:id" component={Phone} />
        <Route path="/categories/:id" component={Phones} />
        <Route path="/basket" component={Basket} />

        <Redirect to="/" />
      </Switch>
    )
    : (
      <Switch>
        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/recovery' component={Recovery} />
        <Route exact path='/' component={Phones} />
        <Route path="/phones/:id" component={Phone} />
        <Route path="/categories/:id" component={Phones} />
        <Route path="/basket" component={Basket} />

        <Redirect to="/" />
      </Switch>
    )

  return (
    <div className={classes.root}>
      {routes}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.token,
  };
};

const mapDispatchToProps = {
  autoLogin
};

Routes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  autoLogin: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);