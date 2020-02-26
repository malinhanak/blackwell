import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { siteTheme } from '../../lib/styles';

const AllTheProviders = ({ children }) => {
  return (
    <MemoryRouter>
      <ThemeProvider theme={siteTheme}>{children}</ThemeProvider>
    </MemoryRouter>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
