import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
// StylesProvider is react component which is used to customize all the css-in-js generation stuff
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';
import SignIn from './components/Signin';

// webpack will generate the css styles with prefix ma in production! for all marketing app objects
// instead of the default generated name like jss1, jss2 so that void the css style collision
const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ onSignin, history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path='/auth/signin'>
              <SignIn onSignIn={onSignin} />
            </Route>
            <Route path='/auth/signup'>
              <Signup onSignIn={onSignin} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
