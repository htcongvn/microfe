import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
// StylesProvider is react component which is used to customize all the css-in-js generation stuff
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

// webpack will generate the css styles with prefix ma in production! for all marketing app objects
// instead of the default generated name like jss1, jss2 so that void the css style collision
const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route path='/' component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
