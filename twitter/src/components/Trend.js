import React from "react";
import styled from "styled-components";
import { FiMoreHorizontal } from "react-icons/fi";

function Trend_({ trends }) {
  return (
    <TrendItem>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TrendItemCate>{trends.category}</TrendItemCate>
        <TrendItemKeyword>{trends.keyword}</TrendItemKeyword>
      </div>
      <FiMoreHorizontal style={{ color: "#8d989f", marginRight: "30px" }} />
    </TrendItem>
  );
}

export default function Trend() {
  const trends = [
    {
      id: 1,
      category: "대한민국에서 트렌드 중",
      keyword: "윤하언니",
    },
    {
      id: 2,
      category: "뮤직 · 실시간 트렌드",
      keyword: "엔시티",
    },
  ];

  return (
    <TrendArea>
      <TrendTitle>나를 위한 트렌드</TrendTitle>

      {trends.map((trends) => (
        <Trend_ trends={trends} key={trends.id} />
      ))}
    </TrendArea>
  );
}

const TrendArea = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
  padding: 15px 0;
  background: #f0f3f4;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TrendTitle = styled.div`
  width: 100%;
  margin: 0px 0 15px 15px;
  font-weight: bold;
  font-size: 20px;
`;

const TrendItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 8px 15px;
`;

const TrendItemCate = styled.div`
  font-weight: bold;
  font-size: 11px;
  color: #8d989f;
`;

const TrendItemKeyword = styled.div`
  font-weight: bold;
  font-size: 13px;
  margin-top: 3px;
`;
