import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: lightblue;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <span>Logo</span>
    </HeaderWrapper>
  );
};

export default Header;
