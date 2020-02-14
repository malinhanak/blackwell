import { createGlobalStyle } from 'styled-components';
import { cssReset } from './cssReset';
import { cssFonts } from './cssFonts';
import { DicetraxBackground } from '../../assets/img';

export const GlobalStyle = createGlobalStyle`
  ${cssReset}
  ${cssFonts}

  * { box-sizing: border-box; }
  html {
    min-height: 100vh;
    background: url(${DicetraxBackground});
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
    background-color: rgba(255, 255, 255, 0.6)
  }
`;
