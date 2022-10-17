import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageView from '../content/ImageView';
import ScoreView from '../content/ScoreView';
import QuizController from '../content/QuizController';
import rounds from '../../models/gameData';
import { flexColumnCenter } from '../../common/mixin';
import ResetButton from '../content/ResetButton';

export default function Contents() {
  const [currentRound, setCurrentRound] = useState([...rounds][0]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setCurrentRound([...rounds][step]);
  }, [step]);

  const goNextRound = () => {
    setStep(step + 1);
  };
  const resetGame = () => {
    if (step === 0) {
      alert('이미 첫 라운드입니다.');
    } else {
      setStep(0);
    }
  };

  const handleClick = (e) => {
    const pickedItem = e.target.innerText;
    const isCorrect = currentRound.correctAnswer;
    const finalRound = 4;
    if (pickedItem === isCorrect && step !== finalRound) {
      goNextRound();
    }
    if (pickedItem === isCorrect && step === finalRound) {
      alert('승리했습니다!!');
      resetGame();
    }
  };

  return (
    <Styled.Root>
      <ScoreView
        step={step}
      />
      <ImageView
        currentRound={currentRound}
      />
      <QuizController
        currentRound={currentRound}
        handleClick={handleClick}
      />
      <ResetButton
        resetGame={resetGame}
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
    color:black;
    `,
};
