import React, { useState } from "react";
import styled, { css } from "styled-components";
// 컴포넌트
import ArticleImg from "./ArticleImg";
//로고 이미지
import profile from "../assets/profile.png";
import heart from "../assets/heart.svg";
import upload from "../assets/upload.svg";
import more from "../assets/more.svg";
import comment from "../assets/comment.svg";
import retweet from "../assets/retweet.svg";

const Article = () => {
  return (
    <ArticleStyle>
      <ProfileImg src={profile} />

      <article style={{ width: "100%", marginLeft: "10px" }}>
        <div
          style={{
            display: "flex",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>김퍼비</Text>
          <Text>@kumpuby</Text>
          <Text>· 1분</Text>

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
            <Icon src={more} style={{ height: "15px", padding: "5px" }} />
          </div>
        </div>

        <Text style={{ lineHeight: "1.5em" }}>
          되려니와, 하였으며, 이상이 이 품에 듣는다. 거친 풍부하게 장식하는
          쓸쓸한 아니다. 인간의 속에 위하여, 그들의 같이 얼음과 이것이야말로
          부패를 대중을 사막이다. 있는 별과 있는 무한한 이것이다. 가는 아니한
          풍부하게 이것이야말로 굳세게 밝은 평화스러운 것이다. 석가는 창공에
          영원히 얼마나 우리 가치를 뿐이다.
        </Text>

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
