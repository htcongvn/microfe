// react app
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// mount () to start up marketing app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// in development & in isolation, call mount() immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// running through container, export mount()
export { mount };
