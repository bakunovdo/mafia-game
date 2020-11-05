import React from 'react';
import styled from 'styled-components';

// === utils ===
import { colors } from '../../utils/variables';

// === icons ===
// import { BsEye } from 'react-icons/bs';

const Input = props => {
  // EyeIcon for password field
  // <BsEye color={colors.lightgray} size="24px" />;
  return <CustomInput {...props} />;
};

export default Input;

const { white, middlegray } = colors;

const CustomInput = styled.input`
  color: ${white};
  padding: 22px 16px 10px;

  width: 100%;
  background-color: ${middlegray};
  border: none;
  border-bottom: 1px solid ${white};
  border-radius: 4px 4px 0 0;
`;