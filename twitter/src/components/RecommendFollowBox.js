import React from "react";
import styled from "styled-components";
import RecFollowItem from "./RecFollowItem";

export default function RecommendFollowBox() {
  return (
    <>
      <RecTitle>팔로우 추천</RecTitle>
      <RecItem>
        <RecFollowItem imgsrc="profile" name="이영지" account="@dldudwl" />
        <RecFollowItem imgsrc="profile" name="문재인" account="@moonriver123" />
      </RecItem>
    </>
  );
}

const RecTitle = styled.div`
  width: 100%;
  margin-left: 15px;
  font-weight: bold;
  font-size: 20px;
`;

const RecItem = styled.div`
  width: 100%;
  height: 100%;
  margin: 8px 15px;
`;
