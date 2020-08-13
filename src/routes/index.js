import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Challenge from '../pages/Challenge';
import Dashboard from '../pages/Dashboard';
import Instructions from '../pages/Instructions';
import Result from '../pages/Result';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/inicio" exact component={Dashboard} />
      <Route path="/instrucoes" exact component={Instructions} />
      <Route path="/desafio" exact component={Challenge} />
      <Route path="/resultado" exact component={Result} />
    </Switch>
  );
}
