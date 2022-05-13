import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Button from "./Button";
import ProfileMenu from "./ProfileMenu";
import HomeLogo from "./HomeLogo";
import { Link } from "react-router-dom";

// 로고
import bell from "../assets/bell.svg";
import dm from "../assets/dm.svg";
import bookmark from "../assets/bookmark.svg";
import more from "../assets/more.svg";
import list from "../assets/list.svg";
import user from "../assets/user.svg";
import home from "../assets/home.svg";
import hashtag from "../assets/hashtag.svg";

const MenuBar = () => {
  const menu = [
    { img: home, text: "홈" },
    { img: hashtag, text: "탐색하기" },
    { img: bell, text: "알림" },
    { img: dm, text: "쪽지" },
    { img: bookmark, text: "북마크" },
    { img: list, text: "리스트" },
    { img: user, text: "프로필" },
    { img: more, text: "더보기" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <StyledLink to="/">
        <HomeLogo />
      </StyledLink>
      <StyledLink to="/">
        <Menu menu={menu[0]} />
      </StyledLink>
      <Menu menu={menu[1]} />
      <Menu menu={menu[2]} />
      <Menu menu={menu[3]} />
      <Menu menu={menu[4]} />
      <Menu menu={menu[5]} />
      <StyledLink to="/profile">
        <Menu menu={menu[6]} />
      </StyledLink>
      <Menu menu={menu[7]} />

      <div style={{ marginTop: "30px" }}>
        <Button size="large" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          verticalAlign: "middle",
          marginTop: "auto",
        }}
      >
        <StyledLink to="/profile">
          <ProfileMenu />
        </StyledLink>
      </div>
    </div>
  );
};

export default MenuBar;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
