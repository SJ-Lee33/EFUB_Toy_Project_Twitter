import React from "react";
import styled from "styled-components";
// 로고
import bell from "../assets/bell.svg";
import dm from "../assets/dm.svg";
import bookmark from "../assets/bookmark.svg";
import more from "../assets/more.svg";
import list from "../assets/list.svg";
import user from "../assets/user.svg";
import home from "../assets/home.svg";
import hashtag from "../assets/hashtag.svg";

const Menu = () => {
  const logos = [
    { img: home, text: "홈" },
    { img: hashtag, text: "탐색하기" },
    { img: bell, text: "알림" },
    { img: dm, text: "쪽지" },
    { img: bookmark, text: "북마크" },
    { img: list, text: "리스트" },
    { img: user, text: "프로필" },
    { img: more, text: "더보기" },
  ];

  const Menu = logos.map((logo, index) => (
    <SingleMenu>
      <MenuItemsBox key={index}>
        <MenuLogo src={logo.img} />
        <MenuText>{logo.text}</MenuText>
      </MenuItemsBox>
    </SingleMenu>
  ));

  return <>{Menu}</>;
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
