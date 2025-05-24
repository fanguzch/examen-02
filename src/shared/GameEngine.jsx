// src/shared/GameEngine.jsx
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Card from "./Card"
import Health from "./Health"
import FoundList from "./FoundList"
import RestartButton from "./RestartButton"
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 150px);
  margin: 0;
`

const CardsContainer = styled.section`
  flex: 1;
  display: grid;
  /* Celdas justo del tamaño de la carta */
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(3, 150px);
  /* Separación real entre cartas */
  gap: 8px;
  /* Alineación de todo el grid en el centro */
  justify-content: center;
  align-content: center;
  background-color: #1e1e1e;
  padding: 0;
`

const ControlPanel = styled.section`
  flex: 1;
  color: #fff;
  background-color: #292929;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
`

const SubTitle = styled.h2`
  font-weight: 200;
  margin: 20px 20px 0;
`

export default function GameEngine() {
  const [words, setWords] = useState([])
  const [cards, setCards] = useState([])
  const [health, setHealth] = useState(5)
  const [guessed, setGuessed] = useState([])
  const [selected, setSelected] = useState([])
  const [block, setBlock] = useState(false)
  const [stopped, setStopped] = useState(false)

  useEffect(() => {
    init()
  }, [])

  async function getRandomWords() {
    const res = await fetch(
      "https://random-word-api.herokuapp.com/word?number=6&lang=es"
    )
    return res.json()
  }

  function shuffle(arr) {
    return arr
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value)
  }

  async function init() {
    const w = await getRandomWords()
    setWords(w)
    setHealth(5)
    setGuessed([])
    setSelected([])
    setStopped(false)
    const duplicated = w.flatMap(x => [x, x])
    setCards(shuffle(duplicated))
  }

  function restart() {
    init()
  }

  function reduceHealth() {
    const h = health - 1
    if (h === 0) {
      setStopped(true)
      Toastify({
        text: "Has perdido el juego. Presiona reiniciar para volver a intentarlo.",
        duration: 3000,
        style: {
          background:
            "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 103, 61))"
        }
      }).showToast()
    }
    setHealth(h)
  }

  function handleClick(idx) {
    if (block || stopped) return
    if (selected.includes(idx) || guessed.includes(cards[idx])) return
    setBlock(true)

    if (selected.length === 1) {
      const firstIdx = selected[0]
      if (cards[firstIdx] === cards[idx] && firstIdx !== idx) {
        const ng = [...guessed, cards[idx]]
        setGuessed(ng)
        if (ng.length === words.length) {
          setStopped(true)
          Toastify({
            text: "Has ganado el juego 😊. Presiona reiniciar para volver a jugar.",
            duration: 3000,
            style: {
              background:
                "linear-gradient(to right,rgb(48, 104, 23),rgb(24, 38, 192))"
            }
          }).showToast()
        }
        setSelected([])
        setBlock(false)
      } else {
        setSelected([firstIdx, idx])
        setTimeout(() => {
          reduceHealth()
          setSelected([])
          setBlock(false)
        }, 1000)
      }
    } else {
      setSelected([idx])
      setBlock(false)
    }
  }

  return (
    <MainContainer>
      <CardsContainer>
        {cards.map((w, i) => (
          <Card
            key={i}
            word={w}
            flipped={selected.includes(i) || guessed.includes(w)}
            onClick={() => handleClick(i)}
          />
        ))}
      </CardsContainer>
      <ControlPanel>
        <SubTitle>Vidas:</SubTitle>
        <Health count={health} />
        <SubTitle>Parejas encontradas</SubTitle>
        <FoundList items={guessed} />
        <RestartButton onClick={restart} />
      </ControlPanel>
    </MainContainer>
  )
}