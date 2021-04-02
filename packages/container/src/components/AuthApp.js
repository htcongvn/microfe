import { mount } from 'auth/AuthApp';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {
  const ref = useRef(null); // ref to the html currently displayed on the browser
  const history = useHistory(); // history is the object copied from the browser history

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location; // current path in the url on the browser

        if (pathname !== nextPathname) {
          // upate the browser history (url on the browser) with the current visiting path
          history.push(nextPathname);
        }
      },
      // initialPath will take the current url path from browser history and initialize it for memory history
      initialPath: history.location.pathname,
      // callback for user authentication
      onSignin: () => {
        onSignIn();
      },
    }); // mount the element which is the current html on the browser (instance of MarketingApp)

    // navigation down to marketing app (child) from container app (parent), i.e. when click on App link
    history.listen(onParentNavigate);
  }, []); // run useEffect only once when marketing app is first rendered to the screen

  return <div ref={ref} />; // render an instance of the ref (instance of MarketingApp) to that div
};
