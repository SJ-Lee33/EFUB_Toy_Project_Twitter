import React from "react";
import Home from "./components/Home";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ position: "fixed" }}>
        <MenuBar />
      </div>
      <div style={{ marginLeft: "251px" }}>
        <Home />
      </div>
    </div>
  );
}

export default App;
