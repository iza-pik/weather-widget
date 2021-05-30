import React from "react";
import styled from "styled-components";
import { iQuery } from "../../App";

const CurrentWeatherWrapper = styled.div`
  min-height: 20vmax;
  background-color: blue;
  ul {
    list-style-type: none;
  }
`;

interface iCurrentWeather {
  weatherData: any;
  query: iQuery;
}

export const CurrentWeather: React.FC<iCurrentWeather> = ({
  query,
  weatherData,
}) => {
  return (
    <CurrentWeatherWrapper>
      <ul>
        <li>
          {Math.floor(weatherData?.main?.temp)}
          {query.units === "metric" ? " °C" : " °F"}
        </li>
      </ul>
    </CurrentWeatherWrapper>
  );
};
