import React from "react";
import styled from "styled-components";
import Button from "./Button";

const AppControlPannel = () => {
  return (
    <>
      <StyledWrapper>
        <div>
          <h2>Vidas:</h2>
          <p>Estas son las vidas restantes</p>
          <h2>Parejas encontradas</h2>
          <ul>
            <li>Prueba 1</li>
            <li>Prueba 2</li>
          </ul>
          <Button />
        </div>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  div {
    color: #fff;
    background-color: #292929;
    height: 100%;
    text-align: center;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  ul li {
    list-style: none;
  }

  h2 {
    font-weight: 200;
    margin: 20px 20px 0;
  }
`;

export default AppControlPannel;
