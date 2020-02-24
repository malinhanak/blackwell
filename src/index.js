import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './lib/styles';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider, MenuProvider } from './context';
import './lib';
import App from './App';

ReactDOM.render(
  <AuthProvider>
    <MenuProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </MenuProvider>
  </AuthProvider>,
  document.getElementById('root')
);
