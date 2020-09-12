import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Banner } from './pages/homePage/Banner/Banner';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" component={Banner} />
        {/* <Route path="/about" component={About} /> */}
      </Switch>
    );
  }
};