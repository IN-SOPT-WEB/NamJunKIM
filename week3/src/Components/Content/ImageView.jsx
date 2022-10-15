import React from 'react';
import styled from 'styled-components';

export default function ImageView() {
  return (
    <Styled.Root>
      <Styled.Image alt="사람 사진" />
    </Styled.Root>

  );
}

const Styled = {
  Root: styled.div`
    max-width: 30rem;
    width:85%;
    height: 30rem;
    border: 1px solid black;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
  `
  ,
};
