import React from "react";
import styled from "styled-components";

import Article from "./Article";
import profile from "../assets/profile.png";
import camera from "../assets/camera.svg";

const Home = () => {
  return (
    <TimeLine>
      <Header>
        <HomeText>홈</HomeText>
        <HomeText>✨</HomeText>
      </Header>

      <Input>
        <img src={profile} style={{ borderRadius: "50%", height: "48px" }} />

        <div style={{ width: "100%", boxSizing: "border-box" }}>
          <TextArea type="text" placeholder="무슨 일이 일어나고 있나요?" />

          <Logos>
            <div>
              <img
                src={camera}
                style={{ height: "20px", verticalAlign: "bottom" }}
              />
            </div>

            <TwitButton>트윗하기</TwitButton>
          </Logos>
        </div>
      </Input>

      <Article />
      <Article />
      <Article />
    </TimeLine>
  );
};

export default Home;

const TextArea = styled.textarea`
  border: none;
  background: transparent;
  width: 100%;
  height: 56px;

  padding-left: 15px;
  box-sizing: border-box;

  overflow: hidden;
  resize: none;
  outline: none;
  font-size: 20px;
  font-weight: bold;
`;

const TwitButton = styled.button`
  display: flex;
  align-items: center;

  justify-content: center;

  height: 36px;
  width: 100px;

  background-color: #1d9bf0;
  border: none;
  border-radius: 18px;

  padding: 5px;

  color: white;
  font-weight: bold;
  font-size: 1rem; // 버튼 폰트 사이즈...??
`;

const Logos = styled.div`
  display: flex;
  padding-left: 15px;
  /* height: 40px; */

  justify-content: space-between;
  align-items: center;
`;

const TimeLine = styled.div`
  width: 700px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  height: 53px;
  background-color: rgba(200, 255, 255, 0.5);

  padding: 0 20px;
`;
const HomeText = styled.p`
  font-size: 20px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
`;

const Input = styled.div`
  display: flex;
  flex-direction: row;

  background-color: beige;
  padding: 20px;
`;
