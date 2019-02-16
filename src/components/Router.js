import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import StorePicker from './StorePicker';
import Error404 from './404';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeID" component={App} />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>
);

export default Router;
