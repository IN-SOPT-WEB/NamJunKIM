import React from 'react';
import styled from 'styled-components';
import { flexRowCenter } from '../../styles/mixin';

export default function ImageView({ currentRoundData, afterFinalRound }) {
  return (
    <Styled.Root afterFinalRound={afterFinalRound}>
      <ImageWrapper>
        <Styled.Image src={currentRoundData.image} alt={currentRoundData.alt} />
      </ImageWrapper>
      <Tooltip afterFinalRound={afterFinalRound}>
        <TooltipTitle>⭐️힌트⭐️</TooltipTitle>
        <TooltipContent>{currentRoundData.companyInfo}</TooltipContent>
      </Tooltip>
    </Styled.Root>

  );
}

const Styled = {
  Root: styled.div`
    display: ${({ afterFinalRound }) => (afterFinalRound ? 'none' : 'flex')};
    position: relative;
  `,
  Image: styled.img`
    width: 75%;
    height: 75%;
  `,
};

const Tooltip = styled.div`
display: ${({ afterFinalRound }) => (afterFinalRound ? 'none' : 'block')};
top: 30%;
left:50%;
position: absolute;
z-index: 1;
transition: all 0.7s;
${Styled.Root}:hover & {
  transform: translateX(75%);
  transition: all 1s;
}
`;
const TooltipTitle = styled.h2`
  font-size:2rem;
`;
const TooltipContent = styled.p`
  font-size:1.5rem;
`;

const ImageWrapper = styled.div`
${flexRowCenter}
max-width: 30rem;
width:21rem;
height: 21rem;
background-color: white;
border-radius:3rem;
box-shadow: rgba(0, 0, 0, 0.35) 0px 0.5rem 1.5rem;
z-index: 2;
transition: all 0.5s;
${Styled.Root}:hover & {
  transform: translateX(-20%);
  transition: all 1s;
  opacity:0.6;

}
`;
