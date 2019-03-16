import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes/index';
import { Provider } from 'react-redux';
import { Store } from './store';

import './styles/init.scss';

const App = () => (
  <Provider store={Store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
