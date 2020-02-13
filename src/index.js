import React from 'react';
import ReactDOM from 'react-dom';

import { AuthProvider } from './App';
import './lib';
import { App } from './App';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
