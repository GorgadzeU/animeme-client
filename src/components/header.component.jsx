import React from "react";
import styled from "styled-components";
import { DARK } from "./UI/colors";

import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  background-color: ${DARK};
  height: 60px;
  padding: 0 4rem;
  display: flex;
  align-items: center;
`;

const LOGO = styled.div`
  font-size: 2rem;
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  color: #ffff;
  cursor: pointer;
`;

const CategoryDropdown = styled.div`
  width: 200px;
  height: 200px;
  padding: 2rem;
  position: absolute;
  top: 35px;
  right: 80px;
  z-index: 10;
  background-color: yellow;
  border-radius: 5px;
  display: none;
  flex-direction: column;

  &:hover {
    display: flex;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  justify-content: flex-end;
  position: relative;
  > * {
    &:first-child {
      border-left: 1px solid grey;
      &:hover ~ ${CategoryDropdown} {
        display: flex;
      }
    }
  }
`;

const NavItem = styled.span`
  color: #d5015b;
  padding: 5px 40px;
  border-right: 1px solid grey;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LOGO>Logo</LOGO>
      <Nav>
        <NavItem>Category</NavItem>
        <NavItem>Shop</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Sing In</NavItem>
        <CategoryDropdown>
          <Link to="/seinen">Seinen</Link>
          <span>Fantasy</span>
          <span>Shounen</span>
        </CategoryDropdown>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
