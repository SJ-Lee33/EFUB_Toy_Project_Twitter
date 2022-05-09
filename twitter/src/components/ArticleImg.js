import React, { useState } from "react";
import styled, { css } from "styled-components";

const ArticleImg = () => {
  const [img, setImg] = useState([1, 1, 1, 1]);

  return (
    <div>
      {img.length === 1 && (
        <div
          className="ArticleImg"
          style={{
            width: "505px",
            height: "283px",
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
            marginTop: "10px",
            flexWrap: "wrap",
          }}
        >
          <Img num="1" />
        </div>
      )}

      {img.length === 2 && (
        <div
          className="ArticleImg"
          style={{
            width: "505px",
            height: "283px",
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
            marginTop: "10px",
            flexWrap: "wrap",
          }}
        >
          <Img num="2-1" />
          <Img num="2-2" />
        </div>
      )}

      {img.length === 3 && (
        <div
          className="ArticleImg"
          style={{
            width: "505px",
            height: "283px",
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
            marginTop: "10px",
            flexWrap: "wrap",
          }}
        >
          <Img num="3-1" />
          <Img num="3-2" />
          <Img num="3-3" />
        </div>
      )}

      {img.length === 4 && (
        <div
          className="ArticleImg"
          style={{
            width: "505px",
            height: "283px",
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
            marginTop: "10px",
            flexWrap: "wrap",
          }}
        >
          <Img num="4-1" />
          <Img num="4-2" />
          <Img num="4-3" />
          <Img num="4-4" />
        </div>
      )}
    </div>
  );
};

export default ArticleImg;

const Img = styled.div`
  background-color: gray;

  ${(props) =>
    props.num === "1" &&
    css`
      border-radius: 10px;
      margin-right: 1px;
      width: 500px;
      height: 280px;
    `}

  ${(props) =>
    props.num === "2-1" &&
    css`
      border-radius: 10px 0 0 10px;
      height: 280px;
      width: 250px;
      margin-right: 1px;
    `}

    ${(props) =>
    props.num == "2-2" &&
    css`
      border-radius: 0 10px 10px 0;
      height: 280px;
      width: 250px;
    `}


    ${(props) =>
    props.num === "4-1" &&
    css`
      border-radius: 10px 0 0 0;
      height: 140px;
      width: 250px;
      margin-right: 1px;
    `}

    ${(props) =>
    props.num === "4-2" &&
    css`
      border-radius: 0 10px 0 0;
      height: 140px;
      width: 250px;
    `}


    ${(props) =>
    props.num === "4-3" &&
    css`
      border-radius: 0 0 0 10px;
      height: 140px;
      width: 250px;
      margin-right: 1px;
    `}

    ${(props) =>
    props.num === "4-4" &&
    css`
      border-radius: 0 0 10px 0;
      height: 140px;
      width: 250px;
    `}
`;
