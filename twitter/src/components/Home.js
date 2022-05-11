import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Spinner from "./Spinner";
import Article from "./Article";
import Input from "./Input";

const Home = ({ articles, loading }) => {
  return (
    <TimeLine>
      <Header>
        <HomeText>홈</HomeText>
        <HomeText>✨</HomeText>
      </Header>

      <Input />

      {loading ? <Spinner /> : ""}

      {articles.map((article) => (
        <Article article={article} />
      ))}
    </TimeLine>
  );
};

export default Home;

const TimeLine = styled.div`
  width: 600px;
  padding-top: 53px;
  box-sizing: border-box;
  border: solid 1px rgba(127, 127, 127, 0.1);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;

  margin-right: auto;
  margin-left: auto;

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
