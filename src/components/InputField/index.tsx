import React from "react";
import styled from "styled-components";

const InputFieldWrapper = styled.div`
  margin: 1vmin;
  padding: 1vmin;
  border-radius: 2px;
  background-color: paleturquoise;
`;

interface iInputField {
  id: string;
  label?: string;
  checked?: boolean;
  name?: string;
  onChange?: any;
  placeholder?: string;
  type: string;
  value: string;
}

export const InputField: React.FC<iInputField> = ({
  id,
  label,
  ...inputProps
}) => {
  return (
    <InputFieldWrapper>
      <label htmlFor={id}>
        <input id={id} {...inputProps} />
        {label}
      </label>
    </InputFieldWrapper>
  );
};
