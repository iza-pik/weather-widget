import React from "react";
import styled from "styled-components";

export const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(navy 40%, lightblue);
  transition: opacity 0.2s, z-index 0.2s;
  opacity: ${(props: iOverlay) => (props.isOn ? 1 : 0)};
  z-index: ${(props: iOverlay) => (props.isOn ? 99 : -1)};
`;

export interface iOverlay {
  isOn: boolean;
}

const Overlay: React.FC<iOverlay> = (props) => <OverlayWrapper {...props} />;

export default Overlay;
