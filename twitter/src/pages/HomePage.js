import React from "react";
import Home from "../components/Home";
import Spinner from "../components/Spinner";
import MenuBar from "../components/MenuBar";
import RecommendBar from "../components/RecommendBarH";

export default function HomePage({ articles, loading }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MenuBar />

      <Home articles={articles} loading={loading} />

      <RecommendBar />
    </div>
  );
}
