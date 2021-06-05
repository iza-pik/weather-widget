import React from "react";
import styled, { keyframes } from "styled-components";
import sun from "../../assets/sun.svg";
import Overlay from "../Overlay";

export const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

export const SpinnerContent = styled.div`
  animation: ${rotate} 1s infinite;
  width: 25vmin;
  height: 25vmin;
  background-image: url(${sun});
  background-position: center;
  background-size: contain;
`;

export interface iSpinner {
  isOn: boolean;
}

const Spinner: React.FC<iSpinner> = (props) => (
  <Overlay {...props}>
    <SpinnerContent />
  </Overlay>
);

export default Spinner;
