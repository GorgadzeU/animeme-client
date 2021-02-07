import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 300px;
  height: 90%;
  max-height: 450px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  padding: 20px;
  background-color: #dedede;
  z-index: 10;
`;

const FormWrapper = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default FormWrapper;
