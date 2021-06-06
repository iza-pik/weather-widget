import React from "react";
import styled from "styled-components";
import { iDaily, iQuery } from "../../App";
import { getTime } from "../../utilities/getTime";

export const ForecastCardWrapper = styled.div`
  background-color: bisque;
  background-position: bottom;
  border-radius: 2vmin;
  color: black;
  font-size: 3vmin;
  font-weight: 900;
  .icon {
    min-width: 3vmax;
    max-width: 8vmax;
  }
  .icon:hover {
    transform: scale(1.75);
  }
  min-height: 32.5vmin;
  min-width: 10vw;
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  text-shadow: 0 2px 2px white;
  .temperature {
    color: #0f0774;
    font-size: 3vmin;
    font-weight: bolder;
  }
  .temperature-warm {
    color: #550808;
    font-size: 3vmin;
    font-weight: bolder;
  }
  .weather-data-box {
    position: relative;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export interface iWeatherCard {
  forecastData: iDaily;
  forecastDay: string;
  query: iQuery;
}

export const ForecastCard: React.FC<iWeatherCard> = ({
  forecastData,
  forecastDay,
  query,
}) => {
  return (
    <ForecastCardWrapper>
      <h4>{forecastDay}</h4>
      <div className="weather-data-box">
        <ul>
          <li
            className={
              typeof forecastData?.temp !== "undefined"
                ? forecastData?.temp.day > 15
                  ? "temperature-warm"
                  : "temperature"
                : "temperature"
            }
          >
            {Math.floor(forecastData?.temp.day)}
            {query.queriedUnits === "metric" ? " °C" : " °F"}
          </li>
          <img
            src={`http://openweathermap.org/img/w/${forecastData?.weather[0]?.icon}.png`}
            alt={`${forecastData?.weather[0]?.description} in ${query.city}`}
            className="icon"
          />
          {/*           
          <li>{`Pressure: ${forecastData?.pressure} hPa`}</li>
          <li>{`Humidity: ${forecastData?.humidity}%`}</li>
          <li>{`Sunrise: ${getTime(forecastData?.sunrise)}`}</li>
          <li>{`Sunset: ${getTime(forecastData?.sunset)}`}</li> */}
        </ul>
      </div>
    </ForecastCardWrapper>
  );
};
