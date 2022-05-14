import React, { useState } from "react";
import API from "./API";
import styled from "styled-components";
import trash from "../assets/trash.png";

const Modal = ({ id }) => {
  console.log(id);
  return (
    <Delete
      onClick={() => {
        console.log("clicked delete modal!!!");
        API.delete(`/tweets/${id}`, {
          data: {
            userId: 1,
          },
        })
          .then((response) => {
            console.log(response);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
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
