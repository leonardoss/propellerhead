import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../containers/Home';
import Detail from '../containers/Detail';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/user/:id" component={Detail} />
  </Switch>
);

export default Routes;
