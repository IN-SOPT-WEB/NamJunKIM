import React from 'react';
import styled from 'styled-components';

export default function QuizController({ currentRound, handleClick }) {
  return (
    <Styled.ItemList>
      {currentRound.answers.map((item) => (
        <Styled.Item key={item.toString()} onClick={handleClick}>
          {item}
        </Styled.Item>
      ))}
    </Styled.ItemList>
  );
}

const Styled = {
  ItemList: styled.ul`
    width: 30rem;
    display: flex;
    list-style: none;
    justify-content:space-around;
    align-items:center;
    padding:0;
  `,
  Item: styled.li`
    background-color:lightgray;
    padding: 0.5rem 1rem;
    border-radius: 3rem;
    cursor:pointer;
  `,
};
