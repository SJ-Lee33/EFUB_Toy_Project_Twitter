import React from "react";
import styled from "styled-components";

const Spinner = () => {
  return <StyledSpinner></StyledSpinner>;
};

export default Spinner;

const StyledSpinner = styled.div`
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-top: -32px;
  margin-left: -32px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: #1d9bf0;
  border-bottom-color: #1d9bf0;
  animation: spinner 0.8s ease infinite;
`;
