import React from "react";
import styled from "styled-components";
import { iCurrent, iQuery } from "../../App";
import { getTime } from "../../utilities/getTime";
import clouds from "../../assets/clouds.jpg";

export const WeatherCardWrapper = styled.div`
  background-image: url(${clouds});
  background-size: cover;
  background-position: bottom;
  border-radius: 2vmin;
  .city {
    transition: all 0.4s ease-out;
  }
  color: black;
  font-size: 3vmin;
  font-weight: 900;
  .icon {
    min-width: 4vmax;
    max-width: 10vmax;
  }
  .icon:hover {
    transform: scale(1.75);
  }
  min-height: 65vmin;
  min-width: 75vw;
  padding-top: 2vmin;
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  text-shadow: 0 2px 2px white;
  .temperature {
    color: #0f0774;
    font-size: 4vmin;
    font-weight: bolder;
  }
  .temperature-warm {
    color: #550808;
    font-size: 4vmin;
    font-weight: bolder;
  }
  .weather-data-box {
    position: relative;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export interface iWeatherCard {
  query: iQuery;
  weatherData: iCurrent;
}

export const WeatherCard: React.FC<iWeatherCard> = ({ query, weatherData }) => {
  return (
    <WeatherCardWrapper>
      <h2 className="city">{query.city || "current location"}</h2>
      <div className="weather-data-box">
        <ul>
          <li
            className={
              typeof weatherData?.temp !== "undefined"
                ? weatherData?.temp > 15
                  ? "temperature-warm"
                  : "temperature"
                : "temperature"
            }
          >
            {Math.floor(weatherData?.temp)}
            {query.queriedUnits === "metric" ? " °C" : " °F"}
          </li>
          <img
            src={`http://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`}
            alt={`${weatherData?.weather[0]?.description} in ${query.city}`}
            className="icon"
          />
          <li>{`Pressure: ${weatherData?.pressure} hPa`}</li>
          <li>{`Humidity: ${weatherData?.humidity}%`}</li>
          <li>{`Sunrise: ${getTime(weatherData?.sunrise)}`}</li>
          <li>{`Sunset: ${getTime(weatherData?.sunset)}`}</li>
        </ul>
      </div>
    </WeatherCardWrapper>
  );
};
