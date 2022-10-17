import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageView from '../content/ImageView';
import ScoreView from '../content/ScoreView';
import QuizController from '../content/QuizController';
import round from '../../models/gameData';
import { flexColumnCenter } from '../../common/mixin';

export default function Contents() {
  const [roundItems, setRoundItems] = useState([...round][0]);
  const [stepNumber, setStepNumber] = useState(0);

  useEffect(() => {
    setRoundItems([...round][stepNumber]);
  }, [stepNumber]);

  const goNextRound = () => {
    setStepNumber(stepNumber + 1);
  };
  const resetGame = () => {
    setStepNumber(0);
  };

  const handleClick = (e) => {
    const pickedItem = e.target.innerText;
    const isCorrect = roundItems.correctAnswer;
    if (pickedItem === isCorrect && stepNumber !== 4) {
      goNextRound();
    }
    if (pickedItem === isCorrect && stepNumber === 4) {
      resetGame();
    }
  };

  return (
    <Styled.Root>
      <ScoreView />
      <ImageView
        roundItems={roundItems}
      />
      <QuizController
        roundItems={roundItems}
        handleClick={handleClick}
      />
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
