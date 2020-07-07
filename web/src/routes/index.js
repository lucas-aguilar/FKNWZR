import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Challenge from '../pages/Challenge';
import Dashboard from '../pages/Dashboard';
import MyInfo from '../pages/MyInfo';
import PreviousChallenges from '../pages/PreviousChallenges';
import Result from '../pages/Result';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/desafio" exact component={Challenge} />
      <Route path="/inicio" exact component={Dashboard} />
      <Route path="/minhas-informacoes" exact component={MyInfo} />
      <Route path="/desafios-anteriores" exact component={PreviousChallenges} />
      <Route path="/resultado" exact component={Result} />
    </Switch>
  );
}
