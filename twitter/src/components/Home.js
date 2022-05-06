import React from "react";
import styled from "styled-components";

import Article from "./Article";
import Input from "./Input";

import profile from "../assets/profile.png";

import bell from "../assets/bell.svg";

const Home = () => {
  let imgArray = [
    { index: 0, src: { profile } },
    { index: 1, src: { bell } },
  ];
  return (
    <TimeLine>
      <Header>
        <HomeText>홈</HomeText>
        <HomeText>✨</HomeText>
      </Header>

      <Input />

      <Article imgArray={imgArray} />
      <Article />
      <Article />
    </TimeLine>
  );
};

export default Home;

const TimeLine = styled.div`
  width: 600px;
  padding-top: 53px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;

  margin-right: 251px;
  margin-left: 251px;

  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 53px;
  width: 600px;

  background-color: rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  padding: 0 20px;
`;

// 글씨체
const HomeText = styled.p`
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: black;
`;
