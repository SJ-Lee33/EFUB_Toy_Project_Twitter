import React from "react";
import styled from "styled-components";

function Trend_({ trends }) {
  return (
    <TrendItem>
      <TrendItemCate>{trends.category}</TrendItemCate>
      <TrendItemKeyword>{trends.keyword}</TrendItemKeyword>
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
  margin: 15px 0;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  background: #f0f3f4;
`;

const TrendTitle = styled.div`
  width: 100%;
  margin: 0px 0 15px 15px;
  font-weight: bold;
  font-size: 20px;
`;

const TrendItem = styled.div`
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
