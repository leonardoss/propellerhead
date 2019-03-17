import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Detail from '../containers/Detail';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/auth" />} />
        <Route exact path="/auth" component={Login} />
        <ProtectedRoute
          exact
          path="/home"
          component={Home}
          isAllowed={this.props.user}
        />
        <ProtectedRoute
          exact
          path="/user"
          component={Detail}
          isAllowed={this.props.user}
        />
      </Switch>
    );
  }
}

const ProtectedRoute = ({ isAllowed, ...props }) =>
  isAllowed ? <Route {...props} /> : <Redirect to="/auth" />;

export default compose(
  connect(
    store => ({
      user: store.UserReducer.user,
    }),
    {
      ...actions,
    }
  )
)(Routes);
