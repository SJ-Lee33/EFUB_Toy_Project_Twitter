import React, { useState, useEffect } from "react";

import axios from "axios";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [articles, setArticles] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://twitter-toy.herokuapp.com/tweets")
      .then((response) => {
        setArticles([...response.data]);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(articles);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage articles={articles} loading={loading} />}
        />
        <Route path="profile/" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
