import { mount } from 'dashboard/DashboardApp';
import React, { useEffect, useRef } from 'react';

export default () => {
  const ref = useRef(null); // ref to the html currently displayed on the browser

  useEffect(() => {
    mount(ref.current);
  }, []); // run useEffect only once when marketing app is first rendered to the screen

  return <div ref={ref} />; // render an instance of the ref (instance of DashboardApp) to that div
};
