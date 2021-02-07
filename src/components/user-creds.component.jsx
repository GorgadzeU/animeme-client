import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import IMG from '../assets/user.png';
import { logOut } from '../redux/auth/auth.actions';

const Hover = styled.div`
  position: absolute;
  top: 100%;
  background-color: #dedede;
  width: 120px;
  height: 100px;
  border-radius: 3px;
  padding: 5px;
  z-index: 11;
  display: none;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2rem;
  cursor: pointer;
  position: relative;

  &:hover ${Hover} {
    display: block;
  }
`;

const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  /* background-color: white; */
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const Name = styled.div`
  color: #fff;
  font-weight: bold;
`;

const UserCreds = ({ name, img, logOut }) => {
  return (
    <Profile>
      <ImageWrapper>
        <img src={img} alt='' />
      </ImageWrapper>
      <Name>{name}</Name>
      <Hover>
        <span onClick={logOut}>Sign Out</span>
      </Hover>
    </Profile>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

export default connect(null, mapDispatchToProps)(UserCreds);
