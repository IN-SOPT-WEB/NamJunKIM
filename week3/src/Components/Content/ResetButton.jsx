import React from 'react';
import styled from 'styled-components';
import { flexRowCenter } from '../../common/mixin';

export default function resetButton({ resetGame }) {
  return (
    <Styled.Root onClick={resetGame}>다시하기</Styled.Root>

  );
}

const Styled = {
  Root: styled.div`
    ${flexRowCenter};
    width: 100%;
    height: 4rem;
    font-size: 2rem;
    background-color: ${({ theme }) => theme.colors.purpleText};
    color: white;
    `,
};
