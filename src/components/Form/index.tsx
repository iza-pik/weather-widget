import React, { useState } from "react";
import styled from "styled-components";
import { iQuery } from "../../App";
import { InputField } from "../InputField";
import Overlay from "../Overlay";

const Button = styled.button`
  background-color: navy;
  border: none;
  &:hover {
    transform: scale(1.75);
  }
  font-size: 5vmin;
  margin-right: 7vw;
  margin-top: 3vh;
  min-height: 10vmin;
  min-width: 10vmin;
  position: fixed;
  right: 0;
  top: 0;
`;

const FormWrapper = styled.form`
  min-height: 30vmin;
  min-width: 75vw;
  background-color: navy;
  border-radius: 2vmin;
  color: bisque;
`;

export interface iForm {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  value: iQuery;
}

export const Form: React.FC<iForm> = ({ onChange, onSubmit, value }) => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const toggleForm = () => setIsFormVisible(!isFormVisible);
  const curriedOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    toggleForm();
    onSubmit(event);
  };

  return (
    <>
      <Button className="icon" onClick={toggleForm}>
        🔍
      </Button>
      <Overlay isOn={isFormVisible}>
        <FormWrapper onSubmit={curriedOnSubmit}>
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
          <InputField
            id="submit"
            type="submit"
            value="Display weather forecast for the next 7 days"
          />
        </FormWrapper>
      </Overlay>
    </>
  );
};
