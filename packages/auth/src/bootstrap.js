import React from 'react';
import ReactDOM from 'react-dom';

import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// mount () to start up marketing app & create a callback onNavigation()
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  // create memory history navigation object. use defaultHistory of there has one, otherwise use memory history
  // const history = defaultHistory || createBrowserHistory();
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  // register to onNavigate callback which is defined in MarketingApp
  // when link is clicked in marketing app, the history will be updated and the callback function will be called
  //  and update it back to browser navigation in container app
  if (onNavigate) {
    // navigation up to container app (parent) from marketing app (child)
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// in development & in isolation, call mount() immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// running through container, export mount()
export { mount };
