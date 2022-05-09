import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
import more from "../assets/more.svg";

const ProfileMenu = () => {
  return (
    <ProfileMenuBox>
      <ProfileImg src={profile} />
      <div>
        <Text style={{ fontWeight: "bold" }}>퍼비</Text>
        <Text>@efub</Text>
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
            height: "18px",
            width: "18px",
          }}
        />
      </div>
    </ProfileMenuBox>
  );
};
export default ProfileMenu;

const ProfileMenuBox = styled.div`
  height: 64px;
  width: 251px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;

  padding: 12px;

  margin-top: 50px;

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
