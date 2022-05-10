import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Trend from "./Trend";
import RecommendFollow from "./RecommendFollow";

export default function RecommendBarP() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "251px",
        margin: "10px 0px 10px 20px",
      }}
    >
      <Search />

      <RecommendFollow />

      <Trend />
    </div>
  );
}
