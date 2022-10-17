import React from 'react';
import styled, { keyframes } from 'styled-components';
import { flexRowCenter } from '../../styles/mixin';

export default function ScoreView({ step }) {
  return (
    <Styled.Root key={step}>
      현재점수 :
      {' '}
      <Styled.Score>{step * 20}</Styled.Score>
      점
    </Styled.Root>
  );
}

const getScoreAnimation = keyframes`
  from {
    color:red;
    transform: scale(1.3);
  }
  to{
    color:black;
  }
`;

const Styled = {
  Root: styled.div`
    ${flexRowCenter}
    width: 100%;
    font-size:3.5rem;
    padding-top: 3.5rem;
    `,
  Score: styled.p`
    color:black;
    animation: ${getScoreAnimation};
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
  `,
};
