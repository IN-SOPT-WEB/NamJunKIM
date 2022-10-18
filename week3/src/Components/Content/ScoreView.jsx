import React from 'react';
import styled, { keyframes } from 'styled-components';
import { flexRowCenter, flexColumnCenter } from '../../styles/mixin';

export default function ScoreView({ myScore, currentStep, afterFinalRound }) {
  return (
    <Styled.Root key={myScore}>
      {afterFinalRound
        ? (

          <Styled.ScoreContainer>
            최종점수 :
            <Styled.Score>
              {myScore}
            </Styled.Score>
          </Styled.ScoreContainer>
        )
        : (
          <Styled.ScoreContainer>
            내 점수는:
            <Styled.Score>
              {myScore}
            </Styled.Score>
            점
          </Styled.ScoreContainer>

        )}

      {afterFinalRound
        ? (
          <Styled.CurrentRoundView>
            역시 당신은 백점!!!떡상가즈아~!!
          </Styled.CurrentRoundView>
        )
        : (
          <Styled.CurrentRoundView>
            {currentStep + 1}
            {' '}
            / 5 라운드 진행중
          </Styled.CurrentRoundView>
        )}

      <Styled.SubDescription afterFinalRound={afterFinalRound}>
        이미지에 마우스를 올리면 힌트가 나와요!!
      </Styled.SubDescription>
    </Styled.Root>
  );
}

const getScoreAnimation = keyframes`
  from {
    color:red;
    transform: scale(1.3);
  }
  to{
    color:black;
  }
`;

const Styled = {
  Root: styled.div`
    ${flexColumnCenter}
    width: 100%;
    font-size:3.5rem;
    padding-top: 3.5rem;
    `,
  ScoreContainer: styled.div`
    ${flexRowCenter}
  `,
  Score: styled.p`
    color:black;
    animation: ${getScoreAnimation};
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
  `,
  SubDescription: styled.p`
    display: ${({ afterFinalRound }) => (afterFinalRound ? 'none' : 'block')};
    font-size:1.4rem;
    color: #979797;
  `,
  CurrentRoundView: styled.p`
    font-size:2rem;
  `,
};
