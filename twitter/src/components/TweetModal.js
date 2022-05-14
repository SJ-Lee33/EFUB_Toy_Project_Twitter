import React, { useState } from "react";
import API from "./API";
import styled from "styled-components";

import { FiTrash2, FiFlag } from "react-icons/fi";

const TweetModal = ({ id }) => {
  console.log(id);
  return (
    <ModalArea>
      <Button>
        <FiFlag
          style={{ width: "18px", height: "18px", marginRight: "12px" }}
        />
        <Text>신고하기</Text>
      </Button>

      <Button
        style={{ color: "#f74549" }}
        onClick={() => {
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
        <FiTrash2
          style={{ width: "18px", height: "18px", marginRight: "12px" }}
        />
        <Text>삭제</Text>
      </Button>
    </ModalArea>
  );
};

export default TweetModal;

const ModalArea = styled.div`
  width: 313px;
  height: auto;
  display: flex;
  flex-direction: column;
  position: absolute;

  box-shadow: 0px 0px 5px 2px rgba(180, 180, 180, 0.5);
  transform: translate(0%, 90%);
`;

const Button = styled.button`
  width: 313px;
  height: 52px;
  padding: 16px;
  display: flex;

  border: none;
  background-color: white;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 18px;
`;
