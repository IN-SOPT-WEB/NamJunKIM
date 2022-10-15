import React from 'react';
import styled from 'styled-components';

export default function ScoreView() {
  return (
    <Styled.Root>0점</Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: white;
    background-color: black;
    height:3rem;
    `,
};
