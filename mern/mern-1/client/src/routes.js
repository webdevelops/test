import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LinksPage } from '../src/pages/LinksPage';
import { CreatePage } from '../src/pages/CreatePage';
import { DetailsPage } from '../src/pages/DetailsPage';
import { AuthPage } from '../src/pages/AuthPage';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path="/links" component={LinksPage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/details/:id" component={DetailsPage} />
        <Redirect to="/create" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/" component={AuthPage} />
      <Redirect to="/" />
    </Switch>
  );
};