import React from "react";
import Home from "../components/Home";
import MenuBar from "../components/MenuBar";
import Profile from "../components/Profile";
import RecommendBar from "../components/RecommendBar";

export default function ProfilePage() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MenuBar />

      <Profile />

      <RecommendBar />
    </div>
  );
}
