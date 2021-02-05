import React from 'react';
import styled from 'styled-components';

const CustomInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const Input = ({ className, type, name, onChange, placeholder, value }) => {
  return (
    <CustomInput
      className={className}
      onChange={onChange}
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
