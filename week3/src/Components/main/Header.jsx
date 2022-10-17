import React from 'react';
import styled from 'styled-components';
import { flexColumnCenter } from '../../styles/mixin';
import MainTitle from '../header/MaintTitle';
import SubTitle from '../header/SubTitle';

export default function Header() {
  return (
    <Styled.Root>
      <MainTitle />
      <SubTitle />
    </Styled.Root>

  );
}

const Styled = {
  Root: styled.div`
      ${flexColumnCenter};
      width: 100%;
      `,
};
