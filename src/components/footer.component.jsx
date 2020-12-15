import React from "react";
import styled from "styled-components";
import { DARK } from "../components/UI/colors";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 75px;
  background-color: ${DARK};
`;

const Footer = () => {
  return <FooterWrapper>&#169; ANIMEME TEAM</FooterWrapper>;
};

export default Footer;
