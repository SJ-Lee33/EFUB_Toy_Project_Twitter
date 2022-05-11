import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
// 컴포넌트
import Button from "./Button";
//로고 png
import profile from "../assets/profile.png";
import image from "../assets/image.png";
import calendar from "../assets/calendar.png";
import gif from "../assets/gif.png";
import location from "../assets/location.png";
import smile from "../assets/smile.png";
import stats from "../assets/stats.png";

const Input = () => {
  const [text, setText] = useState("");

  // 게시글 작성
  const onSubmit = (e) => {
    axios
      .post("https://twitter-toy.herokuapp.com/tweets", {
        userId: 1,
        content: text,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setText("");
  };

  return (
    <InputBox>
      <ProfileImg src={profile} />

      <div
        style={{
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <form onSubmit={onSubmit}>
          <TextArea
            type="text"
            placeholder="무슨 일이 일어나고 있나요?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <Logos>
            <div>
              <Logo src={image} />
              <Logo src={gif} />
              <Logo src={smile} />
              <Logo src={calendar} />
              <Logo src={stats} style={{ opacity: "0.7" }} />
              <Logo src={location} style={{ opacity: "0.5" }} />
            </div>

            <Button size="small" type="submit">
              트윗하기
            </Button>
          </Logos>
        </form>
      </div>
    </InputBox>
  );
};

export default Input;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;

  min-height: 150px;

  padding: 20px;
`;

const ProfileImg = styled.img`
  height: 48px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
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

  color: gray;
`;

const Logos = styled.div`
  display: flex;
  padding-left: 15px;

  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 20px;
  vertical-align: bottom;
  margin-left: 7Z Qpx;
  padding: 8px;

  transition: all 0.15s;
  &:hover {
    background-color: #e7e7e8;

    border-radius: 18px;
  }
`;
