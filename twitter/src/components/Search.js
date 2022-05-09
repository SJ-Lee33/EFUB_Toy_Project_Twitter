import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <SearchArea>
      <FiSearch style={{ paddingLeft: "20px", paddingRight: "10px" }} />
      <form>
        <SearchBar type="text" name="search" placeholder="트위터 검색" />
      </form>
    </SearchArea>
  );
}

const SearchArea = styled.div`
  background: #f0f3f4;
  border-radius: 30px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchBar = styled.input`
  width: 100%;
  border: none;
  background: transparent;

  overflow: hidden;
  resize: none;
  outline: none;
`;
