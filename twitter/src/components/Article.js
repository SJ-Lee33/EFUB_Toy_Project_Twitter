import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
import bell from "../assets/bell.svg";

import gif from "../assets/gif.png";
import heart from "../assets/heart.svg";
import picture from "../assets/picture.svg";
import smile from "../assets/smile.png";
import upload from "../assets/upload.svg";
import more from "../assets/more.svg";
import comment from "../assets/comment.svg";
import retweet from "../assets/retweet.svg";

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
          }}
        >
          <Text style={{ fontWeight: "bold" }}>김퍼비</Text>
          <Text>@kumpuby</Text>
          <Text>. 1분</Text>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              flexGrow: "1",
              alignItems: "center",
              verticalAlign: "middle",
            }}
          >
            <img src={more} style={{ height: "15px", padding: "5px" }} />
          </div>
        </div>

        <p>
          게시글fㄴㅇㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ
        </p>

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
          <Logo src={comment} />
          <Logo src={retweet} />
          <Logo src={heart} />
          <Logo src={upload} style={{ height: "15px", marginRight: "50px" }} />
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

const Text = styled.p`
  margin: 0;
  font-size: 15px;
  margin-right: 5px;
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

const Logo = styled.img`
  height: 18px;
  opacity: 0.5;
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
