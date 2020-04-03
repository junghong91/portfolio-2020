import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const ButtonStyle = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  cursor: pointer;
  i {
    font-size: 50px;
    padding-top: 20px;
  }
  &:hover {
    transform: scale(1.1);
    border: 2px solid ${props => props.color};
  }
`;

const ButtonText = styled.div`
  padding-top: 10px;
  font-weight: 600;
  text-align: center;
`;

const MenuButton = props => {
  return (
    <ButtonStyle
      onMouseOver={() => props.showPage(props.index)}
      color={props.color}
    >
      <Icon name={props.icon} />
      <ButtonText>{props.title}</ButtonText>
    </ButtonStyle>
  );
};

export default MenuButton;
