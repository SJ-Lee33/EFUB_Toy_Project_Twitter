import React from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import HomeLogo from "./components/HomeLogo";
import Button from "./components/Button";
import ProfileMenu from "./components/ProfileMenu";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <MenuBar />
      <Home />
    </div>
  );
}

export default App;
