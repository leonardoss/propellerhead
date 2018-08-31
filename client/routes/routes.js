import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Detail from '../components/Detail';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/user/:id" component={Detail} />
  </Switch>
);
export default Routes;
