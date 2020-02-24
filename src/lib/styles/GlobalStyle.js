import { createGlobalStyle } from 'styled-components';
import { cssReset } from './cssReset';
import { cssHamburger } from './cssHamburger';
import { background } from '../../assets/img';

export const GlobalStyle = createGlobalStyle`
  ${cssReset}

  * { box-sizing: border-box; }
  html {
    min-height: 100vh;
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 16px;
    font-weight: 300;
  }
  body {
    width: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    font-family: 'Quantico';
    color: ${(props) => props.theme.colors.font};
    background-color: rgba(158, 55, 22, 0.2)
  }



  /* TEST */
  ${cssHamburger}
`;
