import React from "react";
import styled from "styled-components";

import Menu from "./Menu";
import Button from "./Button";
import ProfileMenu from "./ProfileMenu";
import HomeLogo from "./HomeLogo";

import bell from "../assets/bell.svg";
import twitter from "../assets/twitter.svg";
import dm from "../assets/dm.svg";
import bookmark from "../assets/bookmark.svg";
import more from "../assets/more.svg";
import list from "../assets/list.svg";
import user from "../assets/user.svg";
import home from "../assets/home.svg";
import hashtag from "../assets/hashtag.svg";

const MenuBar = () => {
  const logo = [
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
    // 스타일 수정 필요
    <div
      style={{
        paddingTop: "53px",
        // border: "solid 1px gray",
        height: "100%",

        display: "flex",
        flexDirection: "column",
      }}
    >
      <HomeLogo />

      <Menu logo={logo} />
      <div style={{ marginTop: "30px" }}>
        <Button size="large" />
      </div>

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
          verticalAlign: "middle",
        }}
      >
        <ProfileMenu />
      </div>
    </div>
  );
};

export default MenuBar;
