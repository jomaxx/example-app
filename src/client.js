import React from 'react';
import Router from './components/Router';
import { Provider } from 'react-redux';
import reducer from './reducers';
import createStore from './createStore';

const store = createStore(reducer);
const rootElement = document.getElementById('app');

React.render(
  <Provider store={store}>
    {() => (<Router/>)}
  </Provider>,
  rootElement
);

if (__DEV__) {
  const DevPanel = require('./components/DevPanel');
  const mountDevTools = document.createElement('div');

  document.body.appendChild(mountDevTools);

  React.render(
    <DevPanel top right bottom store={store}/>,
    mountDevTools
  );
}
