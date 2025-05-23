import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

export async function getRandomWords() {
  const response = await fetch(
    "https://random-word-api.vercel.app/api?words=6&lang=es"
  );
  return await response.json();
}

const shuffle = (array) => {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const CardBoard = ({ engine }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    getRandomWords().then((res) => {
      const duplicated = res.flatMap((word) => [word, word]);
      const shuffled = shuffle(duplicated);
      setWords(shuffled);
      engine.words = res;
    });
  }, []);

  return (
    <CardGrid>
      {words.map((word, index) => (
        <Card key={index} word={word} engine={engine} />
      ))}
    </CardGrid>
  );
};

export default CardBoard;
