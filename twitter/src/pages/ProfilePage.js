import React, { useState, useEffect } from "react";
import Home from "../components/Home";
import MenuBar from "../components/MenuBar";
import Profile from "../components/Profile";
import RecommendBar from "../components/RecommendBarP";

import Spinner from "../components/Spinner";
import API from "../components/API";

export default function ProfilePage({ user }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getOwnTweets = async () => {
    const response = await API.get("/users/1/mytweets")
      .then((response) => {
        setArticles([...response.data]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getOwnTweets();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {loading ? <Spinner /> : ""}

      <MenuBar />

      {user && user[0] && <Profile user={user[0]} articles={articles} />}

      <RecommendBar />
    </div>
  );
}
