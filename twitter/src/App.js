import React from "react";
import styled, { css } from "styled-components";

import Home from "./components/Home";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MenuBar />

      <Home />

      <RightBar>오른쪽</RightBar>
    </div>
  );
}

export default App;

const RightBar = styled.div`
  width: 251px;

  background-color: rgba(127, 127, 127, 0.1);
`;
