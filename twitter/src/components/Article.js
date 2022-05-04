import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
import camera from "../assets/camera.svg";
import img1 from "../assets/img1.jpg";

const Article = () => {
  return (
    <ArticleStyle>
      <img
        src={profile}
        style={{ borderRadius: "50%", height: "48px", width: "48px" }}
      />

      <section style={{ width: "100%", marginLeft: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ margin: "0", fontSize: "15px" }}> 김퍼비 @kimpuby 1분</p>
          <p>...</p>
        </div>

        <p style={{}}>게시글</p>

        <img
          src={img1}
          style={{
            height: "500px",
            width: "100%",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img src={camera} style={{ height: "18px" }} />
          <img src={camera} style={{ height: "18px" }} />
          <img src={camera} style={{ height: "18px" }} />
          <img src={camera} style={{ height: "18px", marginRight: "50px" }} />
        </div>
      </section>
    </ArticleStyle>
  );
};

export default Article;

const ArticleStyle = styled.div`
  display: flex;

  padding: 20px;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
`;
