import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Components/common/Header';
import Contents from './Components/common/Contents';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Contents />
    </ThemeProvider>
  );
}

export default App;
