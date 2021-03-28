import { mount } from 'marketing/MarketingApp';

import React, { useEffect, useRef } from 'react';

export default () => {
  const ref = useRef(null); // ref to the html currently displayed on the browser

  useEffect(() => {
    mount(ref.current); // mount the element which is the current html on the browser (instance of MarketingApp)
  });

  return <div ref={ref} />; // render an instance of the ref (instance of MarketingApp) to that div
};
