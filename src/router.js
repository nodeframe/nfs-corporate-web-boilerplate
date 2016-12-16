import React from 'react';
import {Router, Route} from 'react-router';
import env from './env';

import Home from './containers/home/home';

const Routers = ({history}) => (
  <Router history={history}>
    <Route path="/" component={Home}>

    </Route>
    <Route path="*" onEnter={() => document.location.href = env.MAIN_URL + '/404'}/>
  </Router>
);

export default Routers;
