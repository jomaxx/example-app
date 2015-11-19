import { Router } from 'express';
import React from 'react';
import { RoutingContext, match } from 'react-router';
import { Provider } from 'react-redux';
import { createAppStore } from '../../www/stores';
import routes from '../../www/routes';
import createLocation from 'history/lib/createLocation';
import { renderToString } from 'react-dom/server';

const router = new Router();

router.get('*', function (req, res, next) {
  const store = createAppStore();
  const location = createLocation(req.url);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {
      next(error);
      return;
    }

    if (redirectLocation) {
      const redirectURI = redirectLocation.pathname + redirectLocation.search;
      res.redirect(301, redirectURI);
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
      body,
    });
  });
});

export default router;
