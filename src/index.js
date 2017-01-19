import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './router';
import { saveState } from './localStorage';

store.subscribe(() => {
  saveState(store.getState());
  // saveState({
  //   songs: store.getState().songs
  // });
});

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
