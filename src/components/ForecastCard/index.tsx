import React from "react";
import styled from "styled-components";
import { iQuery, iData } from "../../App";
import { getTime } from "../../utilities/getTime";
import clouds from "../../assets/clouds.jpg";

export const ForecastCardWrapper = styled.div`
  background-image: url(${clouds});
  background-size: cover;
  background-position: bottom;
  border-radius: 2vmin;
  .city {
    transition: 0.4s ease-out;
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
  weatherData: iData;
}

export const WeatherCard: React.FC<iWeatherCard> = ({ query, weatherData }) => {
  return (
    <ForecastCardWrapper>
      <h2 className="city">{weatherData?.name || "current location"}</h2>
      <div className="weather-data-box">
        <ul>
          <li
            className={
              typeof weatherData?.main?.temp !== "undefined"
                ? weatherData?.main?.temp > 15
                  ? "temperature-warm"
                  : "temperature"
                : "temperature"
            }
          >
            {Math.floor(weatherData?.main?.temp)}
            {query.queriedUnits === "metric" ? " °C" : " °F"}
          </li>
          <img
            src={`http://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`}
            alt={`${weatherData?.weather[0]?.description} in ${query.city}`}
            className="icon"
          />
          <li>{`Pressure: ${weatherData?.main?.pressure} hPa`}</li>
          <li>{`Humidity: ${weatherData?.main?.humidity}%`}</li>
          <li>{`Sunrise: ${getTime(weatherData?.sys?.sunrise)}`}</li>
          <li>{`Sunset: ${getTime(weatherData?.sys?.sunset)}`}</li>
        </ul>
      </div>
    </ForecastCardWrapper>
  );
};
