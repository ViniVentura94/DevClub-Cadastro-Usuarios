
import React from 'react';
import { IMaskInput } from 'react-imask';
import styled from 'styled-components';

const StyledPhoneInput = styled(IMaskInput)`
  border-radius: 10px;
  border: solid 1px #d2daae;
  background-color: #fff;
  padding: 12px 20px;
  outline: none;
  width: 100%;
`;

const InputPhoneMasked = React.forwardRef((props, ref) => {
  return (
    <StyledPhoneInput
      {...props}
      mask="(00) 00000-0000"
      inputRef={ref}
      placeholder="Telefone"
    />
  );
});

export default InputPhoneMasked;
