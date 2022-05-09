import React from "react";
import styled from "styled-components";

const Menu = ({ menu }) => {
  return (
    <SingleMenu>
      <MenuItemsBox key={menu.text}>
        <MenuLogo src={menu.img} />
        <MenuText>{menu.text}</MenuText>
      </MenuItemsBox>
    </SingleMenu>
  );
};

export default Menu;

const SingleMenu = styled.div`
  height: 58px;
  width: 251px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
`;

const MenuItemsBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 12px;
  padding-right: 30px;

  transition: all 0.15s;
  &:hover {
    background-color: #e7e7e8;
    border-radius: 25px;
    cursor: pointer;
  }
`;
const MenuText = styled.p`
  font-size: 19px;
  font-family: Arial, Helvetica, sans-serif;

  margin-left: 20px;
`;

const MenuLogo = styled.img`
  width: 23px;
  height: 23px;
`;
