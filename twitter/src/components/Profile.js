import React, { useState } from "react";
import styled from "styled-components";
import headerimg from "../assets/ewha.png";
import profile from "../assets/profile.png";
import { FiChevronLeft } from "react-icons/fi";
import { BsCalendar3 } from "react-icons/bs";
import Article from "../components/Article";
import RecommendFollowBox from "./RecommendFollowBox";

export default function Profile() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      content: "첫번째 트윗",
      nickname: "test1",
      twitter_id: "user1",
      created_at: "2022-04-13 12:30:03",
    },
    {
      id: 2,
      content: "두번째 트윗",
      nickname: "test2",
      twitter_id: "user2",
      created_at: "2022-04-13 12:30:03",
    },
    {
      id: 3,
      content: "세번째 트윗",
      nickname: "test3",
      twitter_id: "user3",
      created_at: "2022-04-13 12:30:03",
    },
  ]);

  return (
    <ProfTimeLine>
      <Header>
        <FiChevronLeft style={{ margin: "0 10px" }} />
        <HeaderText>
          <div style={{ fontSize: "1rem", fontWeight: "bold" }}>퍼비</div>
          <div style={{ fontSize: "0.2rem", fontWeight: "400" }}>2트윗</div>
        </HeaderText>
      </Header>

      <ProfileArea>
        <HeaderImg src={headerimg} />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ProfileImg src={profile} />
          <ModifyProfile>프로필 수정</ModifyProfile>
        </div>

        <div style={{ margin: "10px" }}>
          <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>퍼비</div>
          <div style={{ fontSize: "0.8rem", color: "gray" }}>@efub</div>

          <Introduce>안녕 퍼비들</Introduce>

          <JoinDate>
            <BsCalendar3 style={{ marginRight: "5px" }} />
            <div>가입일: 2022년 5월</div>
          </JoinDate>

          <FollowInfo>
            <p>1</p>
            <TextG>&nbsp;팔로우 중</TextG>
            <p style={{ marginLeft: "10px" }}>0</p>
            <TextG>&nbsp;팔로워</TextG>
          </FollowInfo>
        </div>
      </ProfileArea>

      <ProfMenu>
        <ProfMenuItemFocus>트윗</ProfMenuItemFocus>
        <ProfMenuItem>트윗 및 답글</ProfMenuItem>
        <ProfMenuItem>미디어</ProfMenuItem>
        <ProfMenuItem>마음에 들어요</ProfMenuItem>
      </ProfMenu>

      <RecommendFollowArea>
        <RecommendFollowBox />
      </RecommendFollowArea>
      {articles.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </ProfTimeLine>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 583px;
  height: 53px;

  align-items: center;

  position: fixed;
  top: 0;

  background-color: rgba(255, 255, 255, 0.9);
`;

const HeaderText = styled.p`
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
`;

const ProfTimeLine = styled.div`
  width: 600px;
  padding-top: 53px;
  box-sizing: border-box;
  border: solid 1px rgba(127, 127, 127, 0.1);
`;

const ProfileArea = styled.div`
  height: auto;
  margin: 5px 20px;
`;

const HeaderImg = styled.img`
  width: 100%;
  height: 150px;
`;

const ProfileImg = styled.img`
  width: 100px;
  border: solid 3px white;
  border-radius: 50%;

  margin-left: 10px;
  margin-top: -55px;
`;

const ModifyProfile = styled.button`
  height: 35px;
  padding: 0 10px;
  margin: 10px;

  border: 1px solid lightgray;
  border-radius: 30px;
  background-color: transparent;
  font-weight: bold;
`;

const Introduce = styled.div`
  font-size: 0.8rem;
  margin: 10px 0;
`;

const JoinDate = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  color: gray;
`;

const FollowInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
`;

const TextG = styled.p`
  color: gray;
`;

const ProfMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border-top: 0.5px solid lightgray;
  border-bottom: 0.5px solid lightgray;
  font-weight: bold;
`;

const ProfMenuItem = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: gray;
  &:hover {
    color: black;
  }
`;

const ProfMenuItemFocus = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: black;
  border-bottom: 3px solid #499ee7;
`;

const RecommendFollowArea = styled.div`
  width: 100%;
  height: auto;
  padding: 15px 0;
  display: flex;
  flex-direction: column;

  border-top: 0.5px solid lightgray;
  border-bottom: 0.5px solid lightgray;
`;