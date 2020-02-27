
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import SignIn from 'containers/auth/SignIn';
// import SignUp from 'containers/auth/SignUp';
// import Recovery from 'containers/auth/Recovery';
// import Logout from 'containers/auth/Logout';
// import { autoLogin } from 'store/actions/authActions';
// import Phones from 'containers/Phones';

import SignIn from './V2/containers/auth/SignIn';
import SignUp from './V2/containers/auth/SignUp';
import Recovery from './V2/containers/auth/Recovery';
import Logout from './V2/containers/auth/Logout';
import { autoLogin } from './V2/store/actions/authActions';
import Phones from './V2/containers/Phones';

// import SignIn from './V3/containers/auth/SignIn';
// import SignUp from './V3/containers/auth/SignUp';
// import Recovery from './V3/containers/auth/Recovery';
// import Logout from './V3/containers/auth/Logout';
// import { autoLogin } from './V3/store/actions/authActions';


// import Phones from 'containers/Phones'

const Routes = ({ isAuthenticated, autoLogin }) => {
  useEffect(() => {
    autoLogin();
  });

  const routes = isAuthenticated
    ? (
      <Switch>
        <Route exact path='/' component={Phones} />
        <Route path='/logout' component={Logout} />

        <Redirect to="/" />
      </Switch>
    )
    : (
      <Switch>
        <Route exact path='/' component={Phones} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/recovery' component={Recovery} />

        <Redirect to="/" />
      </Switch>
    )

  return routes;
};

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.token
    // isAuthenticated: Boolean(state.auth.token)
  };
};

const mapDispatchToProps = {
  autoLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes)