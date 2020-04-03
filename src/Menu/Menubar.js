import React from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";

const Menu = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  width: 60%;
  height: 20vh;
  left: 50%;
  padding: 15px 30px;
  padding-bottom: 10px;
  transform: translateX(-50%);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #eeeeee;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
`;

const Menubar = props => {
  const menus = [
    {
      title: "Javascript",
      icon: "js",
      color: "#F7DF1E"
    },
    {
      title: "ReactJS",
      icon: "react",
      color: "#00D8FF"
    },
    {
      title: "NodeJS",
      icon: "node",
      color: "#7CB801"
    },
    {
      title: "AWS",
      icon: "aws",
      color: "#E10099"
    },
    {
      title: "MongoDB",
      icon: "database",
      color: "#7EBD55"
    }
  ];

  const renderMenu = menus => {
    return menus.map((menu, index) => {
      return (
        <MenuButton
          showPage={props.showPage}
          key={index}
          index={index}
          {...menu}
        />
      );
    });
  };

  return <Menu>{renderMenu(menus)}</Menu>;
};

export default Menubar;
