import React from 'react';
import styled from 'styled-components';

export default function ScoreView({ step }) {
  return (
    <Styled.Root>
      현재점수 :
      {' '}
      {step * 20}
      점
    </Styled.Root>
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
