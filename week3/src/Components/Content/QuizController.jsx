/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { flexRowCenter } from '../../styles/mixin';

export default function QuizController({ currentRoundData, handleClick, afterFinalRound }) {
  return (
    <Styled.ItemList afterFinalRound={afterFinalRound}>
      {currentRoundData.answers.map((item) => (
        <Styled.Item key={item.toString()} onClick={handleClick}>
          {item}
        </Styled.Item>
      ))}
    </Styled.ItemList>
  );
}

const Styled = {
  ItemList: styled.ul`
    ${flexRowCenter}
    width: 100%;
    list-style: none;
    display: ${({ afterFinalRound }) => (afterFinalRound ? 'none' : 'flex')};
    padding:0;
    
`,
  Item: styled.li`
    ${flexRowCenter}
    cursor: pointer;
    padding: 0.6rem 1.2rem;
    border-radius: 3rem;
    font-size:1.6rem;
    margin-right: 2rem;
    transition: all 1s;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    &:hover{
      color:white;
      transition: all 1s;
      background-color:black;
    }
    `,
};
