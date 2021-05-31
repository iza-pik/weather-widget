import React from "react";
import styled from "styled-components";
import { iQuery } from "../../App";
import { InputField } from "../InputField";

const FormWrapper = styled.form`
  min-height: 50vh;
  background-color: white;
  border-radius: 2vmin;
  box-shadow: 0 0 5vmin 5vmin white;
  color: navy;
`;

export interface iForm {
  onChange: any;
  onSubmit: any;
  value: iQuery;
}

export const Form: React.FC<iForm> = ({ onChange, onSubmit, value }) => (
  <FormWrapper onSubmit={onSubmit}>
    <InputField
      onChange={onChange}
      id="city"
      data-id="city"
      label="City: "
      type="text"
      placeholder="Insert the city"
      value={value.city}
    />
    <InputField id="submit" type="submit" value="Submit" />
    <InputField
      checked={value.units === "metric"}
      data-id="units"
      id="metric"
      label="Metric"
      type="radio"
      value="metric"
      name="units"
      onChange={onChange}
    />
    <InputField
      data-id="units"
      id="imperial"
      label="Imperial"
      type="radio"
      value="imperial"
      name="units"
      onChange={onChange}
    />
  </FormWrapper>
);
