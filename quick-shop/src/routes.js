
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import { autoLogin } from 'store/actions/authActions';
// import SignIn from 'containers/auth/SignIn';
// import SignUp from 'containers/auth/SignUp';
// import Recovery from 'containers/auth/Recovery';
// import Logout from 'containers/auth/Logout';
// import Phones from 'containers/Phones';
// import Phone from 'containers/Phone';

import SignIn from './V2/containers/auth/SignIn';
import SignUp from './V2/containers/auth/SignUp';
import Recovery from './V2/containers/auth/Recovery';
import Logout from './V2/containers/auth/Logout';
import { autoLogin } from './V2/store/actions/authActions';
import Phones from './V2/containers/Phones';
import Phone from './V2/containers/Phone';

// import SignIn from './V3/containers/auth/SignIn';
// import SignUp from './V3/containers/auth/SignUp';
// import Recovery from './V3/containers/auth/Recovery';
// import Logout from './V3/containers/auth/Logout';
// import { autoLogin } from './V3/store/actions/authActions';
// import Phones from './V3/containers/Phones';
// import Phone from './V3/containers/Phone';


const Routes = ({ isAuthenticated, autoLogin }) => {
  useEffect(() => {
    autoLogin();
  });

  const routes = isAuthenticated
    ? (
      <Switch>
        <Route path='/logout' component={Logout} />
        <Route exact path='/' component={Phones} />
        <Route path="/phones/:id" component={Phone} />

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

        <Redirect to="/" />
      </Switch>
    )

  return routes;
};

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.token
  };
};

const mapDispatchToProps = {
  autoLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes)