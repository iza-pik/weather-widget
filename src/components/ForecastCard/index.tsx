import React from "react";
import styled from "styled-components";
import { iDaily, iQuery } from "../../App";

export const ForecastCardWrapper = styled.div`
  background-color: bisque;
  transition: background-color 0.3s linear;
  border-radius: 2vmin;
  color: black;
  font-size: 3vmin;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    background-color: goldenrod;
    transition: background-color 0.1s linear;
  }
  .icon {
    min-width: 3vmax;
    max-width: 8vmax;
  }
  .icon:hover {
    transform: scale(1.75);
  }
  margin-top: 2vmin;
  min-height: 28vmin;
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
  forecastDay: { name: string; index: number };
  onClick: any;
  query: iQuery;
}

export const ForecastCard: React.FC<iWeatherCard> = ({
  forecastData,
  forecastDay,
  onClick,
  query,
}) => {
  const isMetric = query.queriedUnits === "metric";
  return (
    <ForecastCardWrapper
      role="button"
      data-day-index={forecastDay.index}
      onClick={onClick}
    >
      <h4>{forecastDay.name}</h4>
      <div className="weather-data-box">
        <ul>
          <li
            className={
              typeof forecastData?.temp !== "undefined"
                ? forecastData?.temp.day > (isMetric ? 15 : 60)
                  ? "temperature-warm"
                  : "temperature"
                : "temperature"
            }
          >
            {Math.floor(forecastData?.temp.day)}
            {isMetric ? " °C" : " °F"}
          </li>
          <li>
            <img
              src={`http://openweathermap.org/img/w/${forecastData?.weather[0]?.icon}.png`}
              alt={`${forecastData?.weather[0]?.description} in ${query.city}`}
              className="icon"
            />
          </li>
        </ul>
      </div>
    </ForecastCardWrapper>
  );
};
