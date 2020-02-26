import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, siteTheme } from './lib/styles';
import { BrowserRouter } from 'react-router-dom';

import './lib';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={siteTheme}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
