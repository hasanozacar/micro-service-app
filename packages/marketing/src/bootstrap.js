import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in development and in isolation,
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#dev-marketing');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
