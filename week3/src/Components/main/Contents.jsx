/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageView from '../content/ImageView';
import ScoreView from '../content/ScoreView';
import QuizController from '../content/QuizController';
import rounds from '../../models/gameData';
import ResetButton from '../content/ResetButton';
import ModalPortal from '../../Portal';
import Modal from '../content/Modal';
import { flexColumnCenter } from '../../styles/mixin';

export default function Contents() {
  const [currentRoundData, setCurrentRoundData] = useState([...rounds][0]);
  const [currentStep, setCurrentStep] = useState(0);
  const [modalOn, setModalOn] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(true);
  const [afterFinalRound, setAfterFinalRound] = useState(false);
  const [myScore, setMyScore] = useState(0);

  useEffect(() => {
    setCurrentRoundData([...rounds][currentStep]);
  }, [currentStep]);

  const resetGame = () => {
    if (currentStep === 0) {
      alert('이미 첫 단계입니다!');
    } else {
      setCurrentStep(0);
      setAfterFinalRound(false);
      setMyScore(0);
    }
  };

  const goNextRound = () => {
    setCurrentStep(currentStep + 1);
  };

  const toggleModal = () => {
    setModalOn(!modalOn);
  };

  const handleStep = () => {
    currentStep === 4 ? setAfterFinalRound(true) : goNextRound();
  };

  const modalEventHandler = () => {
    toggleModal();
    if (modalOn && isCorrectAnswer) {
      setMyScore(myScore + 20);
      handleStep();
    }
  };

  const handleClick = (e) => {
    const userAnswer = e.target.innerText;
    const isCorrect = currentRoundData.correctAnswer;
    userAnswer === isCorrect ? setIsCorrectAnswer(true) : setIsCorrectAnswer(false);
    modalEventHandler();
  };

  return (
    <Styled.Root>
      <ScoreView
        myScore={myScore}
        currentStep={currentStep}
        afterFinalRound={afterFinalRound}
      />
      <ImageView
        currentRoundData={currentRoundData}
        afterFinalRound={afterFinalRound}
      />
      <QuizController
        currentRoundData={currentRoundData}
        afterFinalRound={afterFinalRound}
        handleClick={handleClick}
      />
      <ResetButton
        afterFinalRound={afterFinalRound}
        resetGame={resetGame}
      />
      <ModalPortal>
        {modalOn && (
        <Modal
          currentRoundData={currentRoundData}
          isCorrectAnswer={isCorrectAnswer}
          modalEventHandler={modalEventHandler}
        />
        )}
      </ModalPortal>
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
