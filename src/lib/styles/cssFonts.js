import { css } from 'styled-components';
import { QuanticoBold, QuanticoBoldItalic, QuanticoItalic, Quantico } from '../../assets/fonts';

export const cssFonts = css`
  @font-face {
    font-family: Quantico;
    src: url(${Quantico}) format('truetype');
  }

  @font-face {
    font-family: Quantico;
    font-weight: bold;
    src: url(${QuanticoBold}) format('truetype');
  }

  @font-face {
    font-family: Quantico;
    font-weight: bold;
    font-style: italic;
    src: url(${QuanticoBoldItalic}) format('truetype');
  }

  @font-face {
    font-family: Quantico;
    font-style: italic;
    src: url(${QuanticoItalic}) format('truetype');
  }
`;
