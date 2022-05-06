import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
import more from "../assets/more.svg";

const ProfileMenu = () => {
  return (
    <SingleMenu>
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
    </SingleMenu>
  );
};
export default ProfileMenu;

//전체
const SingleMenu = styled.div`
  height: 64px;
  width: 251px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;

  padding: 12px;

  margin-top: 50px;
`;

//프로필 사진
const ProfileImg = styled.img`
  border-radius: 50%;
  height: 40px;
`;

const Text = styled.p`
  margin: 0;
  margin-left: 10px;
`;

const MenuItemsBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 12px;
  padding-right: 30px;

  &:hover {
    background-color: #e7e7e8;
    border-radius: 25px;
  }
`;
const MenuText = styled.p`
  font-size: 19px;
  font-family: Arial, Helvetica, sans-serif;

  margin-left: 20px;
`;

const MenuLogo = styled.img`
  width: 26px;
  height: 26px;
`;
