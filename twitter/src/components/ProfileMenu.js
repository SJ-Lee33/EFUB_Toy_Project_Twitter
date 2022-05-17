import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
import more from "../assets/more.svg";

export default function ProfileMenu({ user }) {
  return (
    <ProfileMenuBox>
      <ProfileImg src={profile} />
      <div>
        <Text style={{ fontWeight: "bold" }}>{user.nickname}</Text>
        <Text>{user.twitterId}얖</Text>
      </div>

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
        <img
          src={more}
          style={{
            height: "15px",
            width: "15px",
          }}
        />
      </div>
    </ProfileMenuBox>
  );
}
const ProfileMenuBox = styled.div`
  height: 64px;
  width: auto;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;

  padding: 12px;

  margin-top: 50px;
  margin-right: 20px;

  transition: all 0.15s;
  &:hover {
    background-color: #e7e7e8;
    border-radius: 32px;
    cursor: pointer;
  }
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  height: 40px;
`;

const Text = styled.p`
  margin: 0;
  margin-left: 10px;
`;
