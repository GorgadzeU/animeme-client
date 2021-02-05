import React from 'react';
import styled from 'styled-components';

const CustomSubmit = styled.input`
  display: block;
  margin: 0 auto;
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  transition: all 0.4s ease;
  background-color: #ffa500;

  &:active {
    outline: none;
    transform: scale(0.9);
  }
`;

const Submit = ({ value, type, className }) => {
  return <CustomSubmit className={className} value={value} type={type} />;
};

export default Submit;
