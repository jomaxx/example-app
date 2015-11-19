import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createAppStore } from './stores';
import Router, { match } from 'react-router';
import routes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createLocation } from 'history';
import DevPanel from './views/DevPanel';

const store = createAppStore();
const history = createBrowserHistory();
const location = createLocation(window.location.pathname);
const mountNode = document.getElementById('app');

// match first to do all async loading of childRoutes and components
match({ routes, location }, () => {
  mountNode.style.display = 'block';

  ReactDOM.render(
    <Provider store={store}>
      <Router routes={routes} history={history}/>
    </Provider>,
    mountNode
  );
});

if (process.env.NODE_ENV === 'development') {
  const devMountNode = document.createElement('div');

  document.body.appendChild(devMountNode);

  ReactDOM.render(
    <DevPanel store={store}/>,
    devMountNode
  );
}
