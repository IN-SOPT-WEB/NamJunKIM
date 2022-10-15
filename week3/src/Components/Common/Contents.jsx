import React from 'react';
import styled from 'styled-components';
import ImageView from '../Content/ImageView';
import ScoreView from '../Content/ScoreView';
import QuizItems from '../Content/QuizItems';

export default function Contents() {
  return (
    <Styled.Root>
      <ScoreView />
      <ImageView />
      <QuizItems />
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
    color:white;
    `,
};
