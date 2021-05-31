import React from "react";
import styled, { keyframes } from "styled-components";
import sun from "../../assets/sun.svg";

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: blue;
  transition: opacity 0.2s, z-index 0.2s;
  opacity: ${(props: iSpinner) => (props.isOn ? 1 : 0)};
  z-index: ${(props: iSpinner) => (props.isOn ? 99 : -1)};
`;

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
  <SpinnerWrapper {...props}>
    <SpinnerContent />
  </SpinnerWrapper>
);

export default Spinner;
