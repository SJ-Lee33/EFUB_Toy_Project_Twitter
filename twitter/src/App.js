import React from "react";
import styled, { css } from "styled-components";

import Home from "./components/Home";
import MenuBar from "./components/MenuBar";
import RecommendBar from "./components/RecommendBar";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MenuBar />

      <Home />

      <RecommendBar />
    </div>
  );
}

export default App;

// const RightBar = styled.div`
//   width: 251px;

//   background-color: rgba(127, 127, 127, 0.1);
// `;
