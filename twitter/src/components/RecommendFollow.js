import React from "react";
import styled from "styled-components";
import RecFollowItem from "./RecFollowItem";

export default function RecommendFollow() {
  return (
    <RecArea>
      <RecTitle>팔로우 추천</RecTitle>
      <RecItem>
        <RecFollowItem imgsrc="profile" name="이영지" account="@dldudwl" />
        <RecFollowItem imgsrc="profile" name="문재인" account="@moonriver123" />
      </RecItem>
    </RecArea>
  );
}

const RecArea = styled.div`
  width: 100%;
  height: 100%;
  margin: 15px 0;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  background: #f0f3f4;
`;

const RecTitle = styled.div`
  width: 100%;
  margin: 0px 0 0 15px;
  font-weight: bold;
  font-size: 20px;
`;

const RecItem = styled.div`
  width: 100%;
  height: 100%;
  margin: 8px 15px;
`;
