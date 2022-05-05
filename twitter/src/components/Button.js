import React from "react";
import styled, { css } from "styled-components";

const Button = ({ size }) => {
  return <TwitButton size={size}>트윗하기</TwitButton>;
};

export default Button;

const TwitButton = styled.button`
  display: flex;
  align-items: center;

  justify-content: center;

  ${(props) =>
    props.size === "large" &&
    css`
      height: 50px;
      width: 225px;
      border-radius: 25px;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      height: 36px;
      width: 100px;
      border-radius: 18px;
      font-weight: bold;
      font-size: 1rem;
    `}

  background-color: #1d9bf0;
  border: none;

  padding: 5px;

  color: white;
  font-weight: bold;
  font-size: 18px; // 버튼 폰트 사이즈...??

  &:hover {
    background-color: #1a8cd8;
  }
  &:active {
    background-color: #177cc0;
  }
`;
