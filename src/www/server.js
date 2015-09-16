import React from 'react';
import { RoutingContext, match } from 'react-router';
import { Provider } from 'react-redux';
import { createAppStore } from './stores';
import * as routes from './components/routes';
import createLocation from 'history/lib/createLocation';
import { renderToString } from 'react-dom/server';

function renderServer (req, res, next) {
  const store = createAppStore();
  const location = createLocation(req.url);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {
      next(error);
      return;
    }

    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
      return;
    }

    if (!renderProps) {
      next();
      return;
    }

    const title = 'Example App';
    const body = renderToString(
      <Provider store={store}>
        <RoutingContext {...renderProps}/>
      </Provider>
    );

    res.render('index', {
      title,
      body
    });
  });
}

export default renderServer;
