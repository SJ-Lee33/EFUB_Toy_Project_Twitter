import React from "react";
import Home from "../components/Home";
import Spinner from "../components/Spinner";
import MenuBar from "../components/MenuBar";
import RecommendBar from "../components/RecommendBarH";

export default function HomePage({ articles, loading, user }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {loading ? <Spinner /> : ""}

      <MenuBar user={user} />

      <Home articles={articles} />

      <RecommendBar />
    </div>
  );
}
