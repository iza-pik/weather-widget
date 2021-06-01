import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders query text", () => {
  render(<App />);
  const cityElement = screen.getByLabelText(/city/i);
  const imperialUnitElement = screen.getByLabelText(/imperial/i);
  const metricUnitElement = screen.getByLabelText(/metric/i);
  expect(cityElement).toBeInTheDocument();
  expect(imperialUnitElement).toBeInTheDocument();
  expect(metricUnitElement).toBeInTheDocument();
});
