// src/shared/Health.jsx
import React from "react";
import styled from "styled-components";

const HealthContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Health({ count }) {
  return (
    <HealthContainer>
      {Array(count)
        .fill("❤️")
        .map((heart, i) => (
          <span key={i}>{heart}</span>
        ))}
    </HealthContainer>
  );
}
