import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { DARK } from './UI/colors';
import { Link } from 'react-router-dom';
import UserCreds from './user-creds.component';

import { onShowSignIn, onShowSignUp } from '../redux/forms/forms.actions';

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
  color: #fff;
  padding: 5px 10px;
  border-right: 1px solid grey;
  cursor: pointer;
`;

const Header = ({ onShowSignIn, onShowSignUp, user }) => {
  console.log(user);
  return (
    <HeaderWrapper>
      <LOGO>
        <a href='/'>Logo</a>
      </LOGO>
      <Nav>
        <NavItem>Category</NavItem>
        <NavItem>Shop</NavItem>
        {/* <NavItem>Contact</NavItem> */}
        {user ? (
          <UserCreds name={user.name} img={user.avatar} />
        ) : (
          <>
            <NavItem onClick={onShowSignIn}>Sign In</NavItem>
            <NavItem onClick={onShowSignUp}>Sign Up</NavItem>
          </>
        )}
        <CategoryDropdown>
          <Link to='/categories/seinen'>Seinen</Link>
          <span>Fantasy</span>
          <span>Shounen</span>
        </CategoryDropdown>
      </Nav>
    </HeaderWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  onShowSignIn: () => dispatch(onShowSignIn()),
  onShowSignUp: () => dispatch(onShowSignUp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
