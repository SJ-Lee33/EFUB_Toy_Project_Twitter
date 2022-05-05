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

        <p>게시글</p>

        {/* 메인 이미지 */}
        {/* <ImageSection /> */}

        <div
          style={{
            width: "505px",
            height: "283px",
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "gray",

              borderRadius: "10px 0 0 0",

              width: "250px",
              height: "140px",

              marginRight: "1px",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "gray",

              borderRadius: "0 10px 0 0",
              width: "250px",
              height: "140px",
            }}
          ></div>

          <div
            style={{
              backgroundColor: "gray",

              borderRadius: "0 0 0 10px ",
              width: "250px",
              height: "140px",
              marginRight: "1px",
            }}
          ></div>

          <div
            style={{
              backgroundColor: "gray",

              borderRadius: "0 0 10px 0",
              width: "250px",
              height: "140px",
            }}
          ></div>
        </div>

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

// 이미지 1개
const ImageSection = styled.div`
  background-color: gray;
  border: solid 1px gray;
  border-radius: 10px;

  width: 500px;
  height: 283px;

  margin-bottom: 10px;
`;

// 이미지 2개

{
  /* 
        <img
          src={img1}
          style={{
            height: "500px",
            width: "100%",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        /> */
}

// <div
// style={{
//   backgroundColor: "gray",

//   borderRadius: "10px 0 0 10px ",

//   width: "250px",
//   height: "283px",

//   marginRight: "1px",
// }}
// ></div>
// <div
// style={{
//   backgroundColor: "gray",

//   borderRadius: "0 10px 10px 0",
//   width: "250px",
//   height: "283px",
// }}
// ></div>
