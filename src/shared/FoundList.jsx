import React from "react";
import styled from "styled-components";

const List = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
`;

export default function FoundList({ items }) {
  return (
    <List>
      {items.map((item, i) => (
        <ListItem key={i}>{item}</ListItem>
      ))}
    </List>
  );
}
