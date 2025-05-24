import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background: linear-gradient(90deg, rgba(42,123,155,1) 0%, rgba(176,150,0,1) 100%);
  height: 150px;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export default function Header() {
  return (
    <HeaderContainer>
      <ContentWrapper>
        <h1>Encuentra la pareja</h1>
      </ContentWrapper>
    </HeaderContainer>
  )
}
