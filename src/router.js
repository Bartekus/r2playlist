import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { onHomeEnter, onMainEnter } from './router_callback';

import Home from './containers/Home';
import Main from './components/Main';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Home} onEnter={onHomeEnter} >
        <IndexRoute component={Main} onEnter={onMainEnter} />
      </Route>
    </Router>
  );
};

export default Routes;
