import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import Login from './components/Login';
import Items from './components/Items/ItemsView';
import ItemDetail from './components/Items/ItemDetailView';
import { requireAuthentication } from './middleware/auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={requireAuthentication(Home)} />
    <Route path="login" component={Login} />
    <Route path="home" component={requireAuthentication(Home)} />

    <Route component={Home}>
      <Route path="items" component={requireAuthentication(Items)}>
      </Route>
      <Route path="items/:id" component={requireAuthentication(ItemDetail)}/>
    </Route>
  </Route>
);
