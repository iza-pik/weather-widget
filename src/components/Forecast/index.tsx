import React from "react";
import styled from "styled-components";
import { iQuery } from "../../App";
import { iWeatherCard, WeatherCard } from "../WeatherCard";
import * as moment from "moment";

const ForecastWrapper = styled.div`
  /* background-color: blue; */
  background-image: url("../../assets/clouds.jpg");
  background-size: cover;
  background-position: bottom;
  min-height: 50vh;
  ul {
    list-style-type: none;
  }
  transition: 0.4s ease-out;
`;

export const Forecast: React.FC<iWeatherCard> = (props) => {
  return (
    <>
      {/* <div>{moment(props.weatherData.dt_txt).calendar()}</div> */}
      <WeatherCard {...props} />
    </>
  );
};
