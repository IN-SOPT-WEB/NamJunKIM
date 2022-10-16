import React from 'react';
import styled from 'styled-components';
import ImageView from '../content/ImageView';
import ScoreView from '../content/ScoreView';
import QuizController from '../content/QuizController';

export default function Contents() {
  return (
    <Styled.Root>
      <ScoreView />
      <ImageView />
      <QuizController />
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap:50;
    width: 100%;
    height: 50rem;
    background-color: #343131;
    color:black;
    `,
};
