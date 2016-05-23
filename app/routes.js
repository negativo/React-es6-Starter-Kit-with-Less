import React from 'react';
import { Route, IndexRoute, RouteHandler, render, NotFoundRoute } from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';
import Main from './components/Main';

var routes = (
  <Route path="/" component={App}>
	<IndexRoute component={Main}  />
	<Route name="all" path="*" component={NotFound} />
  </Route>
);

export default routes;
