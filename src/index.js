import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import Dashboard from './app/containers/Dashboard';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';
import './app/assets/reset.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
// import 'todomvc-app-css/index.css';

const store = configureStore();
console.log(store);
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
