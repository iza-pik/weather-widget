import React from "react";
import styled from "styled-components";

const InputFieldWrapper = styled.div`
  margin: 1vmin;
  padding: 1vmin;
  input#text {
    background-color: bisque;
    border-radius: 1vmin;
    font-size: 3vmin;
    margin: 1vmin;
  }
  input#submit {
    background-color: darksalmon;
    border: solid bisque;
    border-radius: 1vmin;
    font-weight: bold;
    font-size: 3vmin;
  }
  label {
    padding: 3vmin; //???
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
