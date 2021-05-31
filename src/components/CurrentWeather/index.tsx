import React from "react";
import styled from "styled-components";
import { iWeatherCard, WeatherCard } from "../WeatherCard";

const CurrentWeatherWrapper = styled.div``;

export const CurrentWeather: React.FC<iWeatherCard> = (props) => {
  return (
    <CurrentWeatherWrapper>
      <WeatherCard {...props} />
    </CurrentWeatherWrapper>
  );
};
