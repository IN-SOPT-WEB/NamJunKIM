import React from 'react';
import styled from 'styled-components';
import Header from './Components/Common/Header';
import Contents from './Components/Common/Contents';

function App() {
  return (
    <Styled.Root>
      <Header />
      <Contents />
    </Styled.Root>
  );
}

export default App;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};
