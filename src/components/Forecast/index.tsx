import React from "react";
import styled from "styled-components";
import { iWeatherCard, WeatherCard } from "../WeatherCard";

const ForecastWrapper = styled.div``;

export const Forecast: React.FC<iWeatherCard> = (props) => {
  return (
    <ForecastWrapper>
      <WeatherCard {...props} />
    </ForecastWrapper>
  );
};
