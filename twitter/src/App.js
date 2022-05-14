import React, { useState, useEffect } from "react";

import API from "./components/API";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [articles, setArticles] = useState([]);

  const [loading, setLoading] = useState(true);

  const getTweets = async () => {
    const response = await API.get("/tweets")
      .then((response) => {
        setArticles([...response.data]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage articles={articles} loading={loading} />}
        />
        <Route path="profile/" element={<ProfilePage articles={articles} />} />
      </Routes>
    </BrowserRouter>
  );
}
