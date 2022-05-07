import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Button from "./Button";
import ProfileMenu from "./ProfileMenu";
import HomeLogo from "./HomeLogo";

const MenuBar = () => {
  return (
    // 스타일 수정 필요
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        paddingTop: "53px",
      }}
    >
      <HomeLogo />

      <Menu />

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
        <ProfileMenu />
      </div>
    </div>
  );
};

export default MenuBar;
