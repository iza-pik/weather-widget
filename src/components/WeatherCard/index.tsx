import React from "react";
import styled from "styled-components";
import { iQuery, iData } from "../../App";
import { getTime } from "../../utilities/getTime";
import clouds from "../../assets/clouds.jpg";

export const WeatherCardWrapper = styled.div`
  background-image: url(${clouds});
  background-size: cover;
  background-position: bottom;
  border-radius: 2vmin;
  color: black;
  font-weight: 900;
  min-height: 50vh;
  ul {
    list-style-type: none;
  }
  text-shadow: 0 0 2vmin white;
  transition: 0.4s ease-out;
`;

export interface iWeatherCard {
  query: iQuery;
  weatherData: iData;
}

export const WeatherCard: React.FC<iWeatherCard> = ({ query, weatherData }) => {
  return (
    <WeatherCardWrapper>
      <h2>Weather in {weatherData.name || "current location"}</h2>
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
