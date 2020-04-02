import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const MyComponent = props => {
  return (
    <h1>
      {props.text}
      {props.children}
    </h1>
  );
};

export default () => {
  return (
    <Container>
      <MyComponent text={"hello this is text"}></MyComponent>
      <MyComponent text={"hello this is text #2"}></MyComponent>
    </Container>
  );
};
