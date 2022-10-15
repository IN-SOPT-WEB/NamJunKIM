import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Styled.Root>당신 누구야!!!</Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 4rem;
      font-size: 2rem;
      background-color: navy;
      color: white;
      `,
};
