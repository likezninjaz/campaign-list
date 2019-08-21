import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Main } from '../containers/Main';

export default () =>
  <HashRouter basename='/campaign-list'>
    <Switch>
      <Route exact path='/' component={Main}/>
    </Switch>
  </HashRouter>
