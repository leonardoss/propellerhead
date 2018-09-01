import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Detail from '../components/Detail';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/user/:id" component={Detail} />
  </Switch>
);
export default Routes;
