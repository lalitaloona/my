import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Console from '@app/components/Console/index';

const history = createBrowserHistory();

// eslint-disable-next-line import/prefer-default-export
export const RootRoutes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route
        path="/console"
        component={Console}
      />
      <Redirect
        from="/"
        to="/console"
      />
    </Switch>
  </BrowserRouter>
);
