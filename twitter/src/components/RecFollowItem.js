import React from "react";
import styled from "styled-components";

export default function RecFollowItem(props) {
  return (
    <ProfileArea>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ProfileImg src={require(`../assets/${props.imgsrc}.png`)} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Name>{props.name}</Name>
          <Account>{props.account}</Account>
        </div>
      </div>

      <FollowBtn>팔로우</FollowBtn>
    </ProfileArea>
  );
}

const ProfileArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const ProfileImg = styled.img`
  display: flex;
  border-radius: 50%;
  margin-right: 5px;
  height: 40px;
`;

const Name = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 16px;
`;

const Account = styled.div`
  font-size: 13px;
  color: gray;
`;

const FollowBtn = styled.button`
  margin-right: 30px;

  font-weight: bold;
  text-align: center;
  text-decoration: none;

  height: 30px;
  width: 70px;

  border: none;
  border-radius: 30px;
  color: white;
  background-color: black;
`;
