import React from "react";
import styled from "styled-components";
import { iCurrent, iQuery } from "../../App";
import { WeatherCard } from "../WeatherCard";

const CurrentWeatherWrapper = styled.div``;

export const CurrentWeather: React.FC<{
  weatherData: iCurrent;
  query: iQuery;
}> = (props) => {
  return (
    <CurrentWeatherWrapper>
      <WeatherCard {...props} />
    </CurrentWeatherWrapper>
  );
};
