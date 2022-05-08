import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import trash from "../assets/trash.png";

const Modal = ({ id }) => {
  return (
    <Delete
      onClick={() => {
        console.log("삭제", id);
        axios.delete(`http://127.0.0.1:8000/review/${id}`);
        window.location.reload();
      }}
    >
      <Logo src={trash} />
      <Text>삭제</Text>
    </Delete>
  );
};

export default Modal;

const Delete = styled.button`
  width: 313px;
  height: 52px;
  padding: 16px;
  display: flex;

  position: absolute;
  transform: translate(0%, 90%);

  border: none;
  background-color: white;
  border-radius: 5px;
  color: #f74549;

  box-shadow: 0px 0px 5px 2px rgba(180, 180, 180, 0.5);
  &:hover {
    background-color: #f7f7f7;
  }
`;

const Logo = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 12px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 18px;
`;
