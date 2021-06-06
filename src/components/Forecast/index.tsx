import React from "react";
import styled from "styled-components";
import { iDaily, iQuery } from "../../App";
import { daysOftheWeek } from "../../constants";
import { ForecastCard } from "../ForecastCard";

const ForecastWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 75vw;
`;

export const Forecast: React.FC<{
  query: iQuery;
  weeklyForecastData: iDaily[];
}> = ({ query, weeklyForecastData }) => {
  const nextDay = new Date().getDay() + 1;
  return (
    <ForecastWrapper>
      {weeklyForecastData.slice(1).map((forecastData, i) => {
        const forecastDay = daysOftheWeek[(nextDay + i) % 7];

        return (
          <ForecastCard
            key={forecastDay}
            forecastDay={forecastDay}
            forecastData={forecastData}
            query={query}
          />
        );
      })}
    </ForecastWrapper>
  );
};
