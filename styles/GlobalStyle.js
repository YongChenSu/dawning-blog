import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
      width: 100vw;
      height: auto;
    }

    body {
      font-family: 'HelveticaNeue', Helvetica, Arial, 'Lucida Grande', sans-serif;
      width: 100vw;
      height: auto;
      color: ${({ theme }) => theme.colors.primaryText};
      background-color: ${({ theme }) => theme.colors.bodyBg};

      transition-duration: 0.2s;
      transition-property: background-color, color;
    }

`;

export default GlobalStyle;
