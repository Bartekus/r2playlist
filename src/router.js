import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { onLibraryEnter, onPlaylistEnter } from './router_callback';

import Home from './containers/Home';
import Main from './components/Main';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Home} onEnter={onLibraryEnter} >
        <IndexRoute component={Main} onEnter={onPlaylistEnter} />
      </Route>
    </Router>
  );
};

export default Routes;
