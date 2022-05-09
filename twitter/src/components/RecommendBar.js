import React from "react";
import styled from "styled-components";
import Search from "./Search";

export default function RecommendBar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "251px",
      }}
    >
      <Search />
    </div>
  );
}
