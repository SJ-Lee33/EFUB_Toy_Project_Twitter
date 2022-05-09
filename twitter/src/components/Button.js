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

  border: none;
  padding: 5px;
  color: white;
  font-weight: bold;
  font-size: 18px;

  background-color: #1d9bf0;

  ${(props) =>
    props.size === "large" &&
    css`
      height: 45px;
      width: 215px;
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

  &:hover {
    background-color: #1a8cd8;
    cursor: pointer;
  }
  &:active {
    background-color: #177cc0;
  }
`;
