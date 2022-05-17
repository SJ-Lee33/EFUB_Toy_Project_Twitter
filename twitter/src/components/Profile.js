import React, { useEffect, useState } from "react";
import styled from "styled-components";
import headerimg from "../assets/ewha.png";
import profile from "../assets/profile.png";
import { FiChevronLeft } from "react-icons/fi";
import { BsCalendar3 } from "react-icons/bs";
import Article from "../components/Article";
import RecommendFollowBox from "./RecommendFollowBox";
import moment from "moment";
import "moment/locale/ko";
import API from "./API";

export default function Profile({ user, articles }) {
  const [follower, setFollower] = useState();
  const [followee, setFollowee] = useState();

  function customDate(date) {
    var moment = require("moment");
    const res = moment(date).format("YYYY년 MM월");
    return res;
  }

  const getFollower = () => {
    const response = API.get("/users/1/follower")
      .then((response) => {
        let loaded = response.data.length;
        setFollower(loaded);
      })
      .catch((error) => {
        console.log("에러", error.message);
      });
  };

  const getFollowee = () => {
    const response = API.get("/users/1/followee")
      .then((response) => {
        let loaded = response.data.length;
        setFollowee(loaded);
      })
      .catch((error) => {
        console.log("에러", error.message);
      });
  };

  useEffect(() => {
    getFollower();
    getFollowee();
  }, []);

  const [edit, setEdit] = useState(false);

  return (
    <ProfTimeLine>
      <Header>
        <FiChevronLeft style={{ margin: "0 10px" }} />
        <HeaderText>
          <div style={{ fontSize: "1rem", fontWeight: "bold" }}>퍼비</div>
          <div style={{ fontSize: "0.2rem", fontWeight: "400" }}>
            {articles.length}트윗
          </div>
        </HeaderText>
      </Header>
      <ProfileArea>
        <HeaderImg src={headerimg} />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ProfileImg src={profile} />

          <ModifyProfile
            onClick={() => {
              setEdit(!edit);
            }}
          >
            프로필 수정
          </ModifyProfile>
        </div>

        <div style={{ margin: "10px" }}>
          <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {user.nickname}
          </div>
          <div style={{ fontSize: "0.8rem", color: "gray" }}>
            {user.twitterId}
          </div>

          {edit ? (
            <ProfileInput></ProfileInput>
          ) : (
            <Introduce>{user.bio}</Introduce>
          )}

          <JoinDate>
            <BsCalendar3 style={{ marginRight: "5px" }} />
            <div>가입일: {customDate(user.createdDate)}</div>
          </JoinDate>

          <FollowInfo>
            <p>{follower}</p>
            <TextG>&nbsp;팔로우 중</TextG>
            <p style={{ marginLeft: "10px" }}>{followee}</p>
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

      {/* {ownArticle} */}

      {articles
        .slice(0)
        .reverse()
        .map((article) => (
          <Article key={article.tweetId} article={article} />
        ))}
    </ProfTimeLine>
  );
}

function ProfileInput() {
  const [bio, setBio] = useState("");

  const editBio = () => {
    const response = API.patch("/users/1", {
      bio: bio,
    }).then(window.location.reload());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editBio();
    setBio("");
  };
  return (
    <form onSubmit={onSubmit}>
      <EditProfileInput
        placeholder="소개글을 수정해주세요"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      ></EditProfileInput>
      <button type="submit" hidden />
    </form>
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

const HeaderText = styled.div`
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

  &:hover {
    cursor: pointer;
    background-color: #e7e7e8;
  }
`;

const EditProfileInput = styled.input`
  background-color: transparent;
  border: solid 1px gray;
  margin: 10px 0;
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
