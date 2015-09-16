import React, { Component } from 'react';
import { Route, IndexRoute, Router } from 'react-router';
import { HOME_PATH, PREVIEW_PATH } from './PATHS';

import AppRoute from './App';
import CodeRoute from './Code';
import PreviewRoute from './Preview';

export default class AppRouter extends Component {
  render() {
    return (
      <Router {...this.props}>
        <Route path={HOME_PATH} component={AppRoute}>
          <IndexRoute component={CodeRoute}/>
          <Route path={PREVIEW_PATH} component={PreviewRoute}/>
        </Route>
      </Router>
    );
  }
}
