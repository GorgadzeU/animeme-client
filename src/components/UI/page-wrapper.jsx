import React from "react";
import styled from "styled-components";
import { DARK } from "./colors";

const Wrapper = styled.div`
  padding: 2rem;
  min-height: 100vh;
  max-width: 1224px;
  margin: 0 auto;
`;

const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
