import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
  min-height: 100vh;
  max-width: 1224px;
  margin: 0 auto;
`;

const PageWrapper = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default PageWrapper;
