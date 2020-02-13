import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './lib/styles';

import { AuthProvider } from './App';
import './lib';
import { App } from './App';

ReactDOM.render(
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </AuthProvider>,
  document.getElementById('root')
);
