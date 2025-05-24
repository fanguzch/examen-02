import React from "react";
import styled, { css } from "styled-components";

const CardContainer = styled.div`
  width: 100px;
  height: 150px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all 0.3s;
  margin: 0px;
  position: relative;
  ${(props) =>
    props.flipped &&
    css`
      transform: rotateY(180deg);
    `}
  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
`;

const Cover = styled.div`
  cursor: pointer;
  width: 100px;
  height: 150px;
  background-color: #1a1a1a;
  transition: all 0.2s;
  &:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;

const Value = styled.div`
  display: ${(props) => (props.flipped ? "block" : "none")};
  color: #fff;
  position: absolute;
  top: 50px;
  left: 0;
  text-align: center;
  width: 100%;
  transform: rotateY(180deg);
`;

export default function Card({ word, flipped, onClick }) {
  return (
    <CardContainer flipped={flipped} onClick={onClick}>
      <Cover />
      <Value flipped={flipped}>{word}</Value>
    </CardContainer>
  );
}
