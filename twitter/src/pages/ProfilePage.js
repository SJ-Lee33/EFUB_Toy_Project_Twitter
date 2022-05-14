import React from "react";
import Home from "../components/Home";
import MenuBar from "../components/MenuBar";
import Profile from "../components/Profile";
import RecommendBar from "../components/RecommendBarP";

export default function ProfilePage({ articles }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MenuBar />

      <Profile articles={articles} />

      <RecommendBar />
    </div>
  );
}
