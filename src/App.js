import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './shared/Header'
import GameEngine from './shared/GameEngine'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    width: 100%; /* Asegura que ocupe todo el ancho */
  }
  body {
    background: #212121;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <GameEngine />
    </>
  )
}

export default App