import React from 'react';
import styled from 'styled-components';
import { flexRowCenter } from '../../styles/mixin';

export default function SubTitle() {
  return (
    <Styled.Root>이 로고의 기업 이름은 무엇일까요?</Styled.Root>

  );
}

const Styled = {
  Root: styled.div`
      ${flexRowCenter};
      width: 100%;
      height: 4rem;
      font-size: 1.5rem;
      background-color: black;
      color: white;
      `,
};
