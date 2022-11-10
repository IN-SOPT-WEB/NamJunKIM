import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Components/main/Header';
import Contents from './Components/main/Contents';
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
