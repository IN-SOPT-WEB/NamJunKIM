import React from 'react';
import styled from 'styled-components';
import { flexRowCenter, flexColumnCenter } from '../../styles/mixin';

export default function Modals({
  modalEventHandler, currentRoundData, isCorrectAnswer,
}) {
  return (

    <Styled.Background onClick={modalEventHandler}>
      { isCorrectAnswer
        ? (
          <Styled.Container>
            정답입니다!
            <Styled.Content>
              {currentRoundData.companyInfo}
            </Styled.Content>
          </Styled.Container>
        ) : (
          <Styled.Container>
            오답입니다!
            <Styled.Content>
              다시한번 생각해보세요!
            </Styled.Content>
          </Styled.Container>
        )}
    </Styled.Background>
  );
}
const Styled = {
  Background: styled.div`
    ${flexRowCenter}
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: rgba( 0, 0, 0, 0.8);
`,
  Container: styled.div`
    ${flexColumnCenter}
    justify-content:center;
    color: black;
    background-color: white;
    border-radius:1rem;
    width: 25rem;
    height: 8rem;
    font-size:2rem;
    padding:5rem 2rem;
`,
  Content: styled.div`
    font-size:1.5rem;
    text-align: center;
  `,
};
