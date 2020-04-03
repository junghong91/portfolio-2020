import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  background-color: lightgrey;
`;

const Header = () => {
  return <Container>Header</Container>;
};

export default Header;
