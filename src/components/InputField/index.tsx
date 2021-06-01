import React from "react";
import styled from "styled-components";

const InputFieldWrapper = styled.div`
  margin: 1vmin;
  font-family: Helvetica, sans-serif;
  font-size: 3vmin;
  padding: 1vmin;
  input {
    background-color: bisque;
    border-radius: 1vmin;
    font-size: 3vmin;
    margin: 1vmin;
  }
  input#submit {
    background-color: goldenrod;
    border-radius: 1vmin;
    font-weight: bold;
    font-size: 3vmin;
  }
  label {
    text-shadow: 0 2px 2px darkred;
  }
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
        {label}
        <input id={id} {...inputProps} />
      </label>
    </InputFieldWrapper>
  );
};
