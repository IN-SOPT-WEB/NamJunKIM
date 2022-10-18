import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { flexRowCenter } from '../../styles/mixin';

export default function resetButton({ resetGame, afterFinalRound }) {
  return (
    <Styled.Root onClick={resetGame} afterFinalRound={afterFinalRound}>
      👈🏻
      {' '}
      다시하기
    </Styled.Root>

  );
}

const resetBtnHoverAnimation = keyframes`
    0%{
        transform: translateX(-5%);
    }
    50%{ 
        transform: translateX(0%);
    }
    100%{
        transform: translateX(-5%);
    }
`;

const Styled = {
  Root: styled.div`
    ${flexRowCenter};
    font-size: 2rem;
    color:white;
    padding:0.6rem 1.5rem;
    background-color:black;
    border-radius:3rem;
    cursor: pointer;
    &:hover{
        animation: ${resetBtnHoverAnimation} 1s linear infinite;
    }
    ${({ afterFinalRound }) => (afterFinalRound && css`
        font-size: 5rem;
        animation: ${resetBtnHoverAnimation} 1s linear infinite;
        margin-bottom:25rem;
    `)}
    `,
};
