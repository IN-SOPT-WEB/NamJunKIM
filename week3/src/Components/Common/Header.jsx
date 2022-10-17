import React from 'react';
import styled from 'styled-components';
import { flexRowCenter } from '../../common/mixin';

export default function Header() {
  return (
    <Styled.Root>내 주식 떡상 가즈아~</Styled.Root>

  );
}

const Styled = {
  Root: styled.div`
      ${flexRowCenter};
      width: 100%;
      height: 4rem;
      font-size: 2rem;
      background-color: ${(props) => props.theme.colors.purpleText};
      color: white;
      `,
};
