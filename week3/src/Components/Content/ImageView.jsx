import React from 'react';
import styled from 'styled-components';
import { flexRowCenter } from '../../common/mixin';

export default function ImageView({ currentRound }) {
  return (
    <Styled.Root>
      <Styled.Image src={currentRound.image} alt={currentRound.alt} />
    </Styled.Root>

  );
}

const Styled = {
  Root: styled.div`
    ${flexRowCenter}
    max-width: 30rem;
    width:21rem;
    height: 21rem;
    background-color: white;
    border-radius:3rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  `,
  Image: styled.img`
    width: 75%;
    height: 75%;
  `
  ,
};
