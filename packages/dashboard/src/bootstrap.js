import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// mount () to start up app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el); // this mount() from Vue!
};

// in development & in isolation, call mount() immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// running through container, export mount()
export { mount };
