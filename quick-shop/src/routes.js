import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import SignIn from 'containers/auth/SignIn';
// import SignUp from 'containers/auth/SignUp';
// import Recovery from 'containers/auth/Recovery';

// import SignIn from './V2/containers/auth/SignIn';
// import SignUp from './V2/containers/auth/SignUp';
// import Recovery from './V2/containers/auth/Recovery';

import SignIn from './V3/containers/auth/SignIn';
import SignUp from './V3/containers/auth/SignUp';
import Recovery from './V3/containers/auth/Recovery';



// import Phones from 'containers/Phones'

const routes = (
  <Switch>
    {/* <Route exact path='/' component={Phones} /> */}
    <Route path='/sign-in' component={SignIn} />
    <Route path='/sign-up' component={SignUp} />
    <Route path='/recovery' component={Recovery} />
  </Switch>
);

export default routes