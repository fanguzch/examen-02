import React from "react";
import styled from "styled-components";

const AppCard = styled.div`
  width: 100px;
  height: 150px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all 0.3s;
  margin: 10px;
  position: relative;
  perspective: 1000px;
  &.flipped,
  &.guessed {
    transform: rotateY(180deg);
  }
  &.flipped .AppCardValue,
  &.guessed .AppCardValue {
    display: block;
  }
  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
`;

const AppCardStyled = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  transition: all 0.2s;
  border-radius: 20px;
  &:hover {
    transform: scale(0.98);
  }
`;

const AppCardValue = styled.div`
  display: none;
  color: #fff;
  position: absolute;
  top: 50px;
  left: 0;
  text-align: center;
  width: 100%;
  transform: rotateY(180deg);
`;

const Card = ({ word, engine }) => {
  const handleClick = (e) => {
    engine.selectCard(e, word);
  };

  return (
    <AppCard onClick={handleClick}>
      <AppCardStyled />
      <AppCardValue className="AppCardValue">{word}</AppCardValue>
    </AppCard>
  );
};

export default Card;
