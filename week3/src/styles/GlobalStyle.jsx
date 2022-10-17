import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'BMHANNAPro', "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
