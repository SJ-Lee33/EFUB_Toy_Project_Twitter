import React, { useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";

// 컴포넌트
import ArticleImg from "./ArticleImg";
import Modal from "./Modal";
//로고 이미지
import profile from "../assets/profile.png";
import heart from "../assets/heart.svg";
import upload from "../assets/upload.svg";
import more from "../assets/more.svg";
import comment from "../assets/comment.svg";
import retweet from "../assets/retweet.svg";

function timeForToday(value) {
  const today = new Date(); // 현재 시간
  const timeValue = new Date(value); // 트윗 날짜

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );

  if (betweenTime < 1) return "지금";

  if (betweenTime < 60) {
    return `${betweenTime}분`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);

  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년`;
}

const Article = ({ article }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const time = timeForToday(article.createdDate);

  return (
    <ArticleStyle>
      <ProfileImg src={profile} />

      <article style={{ width: "100%", marginLeft: "10px" }}>
        <div
          style={{
            display: "flex",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{article.nickname}</Text>
          <Text>{article.twitterId}</Text>
          <Text>· {article.createdDate}</Text>
          <Text>{time}</Text>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              flexGrow: "1",
              alignItems: "center",
              verticalAlign: "middle",
            }}
          >
            {showModal && <Modal id={article.id} />}

            <Icon
              src={more}
              style={{ height: "15px", padding: "5px" }}
              onClick={openModal}
            />
          </div>
        </div>

        <Text style={{ lineHeight: "1.5em" }}>{article.content}</Text>

        <ArticleImg />

        <div
          className="Icons"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Icon src={comment} />
          <Icon src={retweet} />
          <Icon src={heart} />
          <Icon src={upload} style={{ height: "15px", marginRight: "50px" }} />
        </div>
      </article>
    </ArticleStyle>
  );
};

export default Article;

const ProfileImg = styled.img`
  border-radius: 50%;
  height: 48px;
  width: 48px;

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;

const ArticleStyle = styled.div`
  display: flex;

  padding: 20px;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
`;

const Text = styled.p`
  margin: 0;
  font-size: 15px;
  margin-right: 5px;
`;

// 이미지 1개
const ImageSection = styled.div`
  background-color: gray;
  border: solid 1px gray;
  border-radius: 10px;

  width: 500px;
  height: 283px;

  margin-bottom: 10px;
`;

const Icon = styled.img`
  height: 18px;
  opacity: 0.5;

  padding: 10px;

  &:hover {
    border-radius: 50%;
    background-color: #e4eef7;
    cursor: pointer;
  }
`;
