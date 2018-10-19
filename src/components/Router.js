import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from '../containers/App/App';
import NotFound from '../components/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
