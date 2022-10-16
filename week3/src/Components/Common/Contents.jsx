import React from 'react';
import styled from 'styled-components';
import ImageView from '../content/ImageView';
import ScoreView from '../content/ScoreView';
import QuizController from '../content/QuizController';
import { flexColumnCenter } from '../../common/mixin';

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
    ${flexColumnCenter};
    justify-content: space-between;
    gap:50;
    width: 100%;
    height: 50rem;
    background-color: #343131;
    color:black;
    `,
};
