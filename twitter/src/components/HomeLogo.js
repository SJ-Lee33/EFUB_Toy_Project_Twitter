import React from "react";
import styled from "styled-components";
import twitter from "../assets/twitter.svg";

const HomeLogo = () => {
  return (
    <SingleMenu>
      <MenuItemsBox>
        <MenuLogo src={twitter} />
      </MenuItemsBox>
    </SingleMenu>
  );
};

export default HomeLogo;
const SingleMenu = styled.div`
  height: 58px;
  width: 251px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;

const MenuItemsBox = styled.div`
  height: 50px;
  width: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;

  transition: all 0.15s;
  &:hover {
    background-color: #e9f5fe;
    border-radius: 25px;
  }
`;
const MenuText = styled.p`
  font-size: 19px;
  font-family: Arial, Helvetica, sans-serif;

  margin-left: 20px;
`;

const MenuLogo = styled.img`
  width: 28px;
  height: 28px;
`;
