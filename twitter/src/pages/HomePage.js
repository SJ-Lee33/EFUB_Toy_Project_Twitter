import React from "react";
import Home from "../components/Home";
import MenuBar from "../components/MenuBar";
import RecommendBar from "../components/RecommendBar";

export default function HomePage() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MenuBar />

      <Home />

      <RecommendBar />
    </div>
  );
}
