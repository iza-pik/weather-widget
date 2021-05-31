import React from "react";
import styled from "styled-components";
import { iQuery, iData } from "../../App";
import { getTime } from "../../utilities/getTime";
import clouds from "../../assets/clouds.jpg";

export const WeatherCardWrapper = styled.div`
  background-image: url(${clouds});
  background-size: cover;
  background-position: bottom;
  min-height: 50vh;
  ul {
    list-style-type: none;
  }
  transition: 0.4s ease-out;
`;

export interface iWeatherCard {
  query: iQuery;
  weatherData: iData;
}

export const WeatherCard: React.FC<iWeatherCard> = ({ query, weatherData }) => {
  return (
    <WeatherCardWrapper>
      <ul>
        <li>
          {Math.floor(weatherData?.main?.temp)}
          {query.queriedUnits === "metric" ? " °C" : " °F"}
        </li>
        <img
          src={`http://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`}
          alt={`${weatherData?.weather[0]?.description} in ${query.city}`}
        />
        <li>{`${weatherData?.main?.pressure} hPa`}</li>
        <li>{`Humidity: ${weatherData?.main?.humidity}%`}</li>
        <li>{`Sunrise: ${getTime(weatherData?.sys?.sunrise)}`}</li>
        <li>{`Sunset: ${getTime(weatherData?.sys?.sunset)}`}</li>
      </ul>
    </WeatherCardWrapper>
  );
};
