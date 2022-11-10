import React from 'react';
import styled from 'styled-components';
import { flexRowCenter } from '../../styles/mixin';

export default function MainTitle() {
  return (
    <Styled.Root>내주식 떡상 가즈아~~!!</Styled.Root>

  );
}

const Styled = {
  Root: styled.div`
      ${flexRowCenter};
      width: 100%;
      height: 6rem;;
      font-size: 2.5rem;
      box-shadow: rgba(0, 0, 0, 0.35) 0px -40px 30px -30px inset;
      `,
};
