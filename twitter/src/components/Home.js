import React from "react";
import styled from "styled-components";

import Article from "./Article";
import profile from "../assets/profile.png";
import img1 from "../assets/img1.jpg";
import camera from "../assets/camera.svg";
import Button from "./Button";

const Home = () => {
  let imgArray = [
    { index: 0, src: { profile } },
    { index: 1, src: { img1 } },
  ];
  return (
    <TimeLine>
      <Header>
        <HomeText>홈</HomeText>
        <HomeText>✨</HomeText>
      </Header>

      <Input>
        <img src={profile} style={{ borderRadius: "50%", height: "48px" }} />

        <div
          style={{
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TextArea type="text" placeholder="무슨 일이 일어나고 있나요?" />

          <Logos>
            <div>
              <img
                src={camera}
                style={{ height: "20px", verticalAlign: "bottom" }}
              />
            </div>

            <Button size="small">트윗하기</Button>
          </Logos>
        </div>
      </Input>

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

  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 53px;
  width: 100%;

  background-color: rgba(255, 255, 255, 0.9);

  box-sizing: border-box;

  padding: 0 20px;
`;

// 글씨체
const HomeText = styled.p`
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

// 무슨일이 일어나고 있나요
const Input = styled.div`
  display: flex;
  flex-direction: row;

  min-height: 150px;

  padding: 20px;
`;

const TextArea = styled.textarea`
  border: none;
  background: transparent;
  width: 100%;
  height: 100px;

  padding-left: 15px;
  box-sizing: border-box;

  overflow: hidden;
  resize: none;
  outline: none;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  font-weight: bold;
`;

const Logos = styled.div`
  display: flex;
  padding-left: 15px;
  /* height: 40px; */

  justify-content: space-between;
  align-items: center;
`;
