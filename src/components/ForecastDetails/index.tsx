import React from "react";
import { iDaily } from "../../App";
import { getTime } from "../../utilities/getTime";
import styled from "styled-components";

export const ForecastDetailsWrapper = styled.div`
  background-color: bisque;
  border-radius: 2vmin;
  color: black;
  font-size: 2.5vmin;
  font-weight: 700;
  margin-top: 2vmin;
  min-height: 10vmin;
  min-width: 73vw;
  padding: 2vmin;
  h3 {
    display: flex;
    position: fixed;
  }
`;

export const ForecastDetails: React.FC<{ details: iDaily }> = ({ details }) => {
  return (
    <ForecastDetailsWrapper>
      <h3>More details... </h3>
      {/* <div>{ForecastCard.forecastDay.name}</div> */}
      <div>{`Pressure: ${details?.pressure} hPa`}</div>
      <div>{`Humidity: ${details?.humidity}%`}</div>
      <div>{`Sunrise: ${getTime(details?.sunrise)}`}</div>
      <div>{`Sunset: ${getTime(details?.sunset)}`}</div>
    </ForecastDetailsWrapper>
  );
};
