import React, { useState } from "react";
import styled from "styled-components";
import { iDaily, iQuery } from "../../App";
import { daysOftheWeek } from "../../constants";
import { ForecastCard } from "../ForecastCard";
import { ForecastDetails } from "../ForecastDetails";

export const ForecastWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 75vw;
  overflow: hidden;
  max-height: ${(props: iForecastWrapper) =>
    props.isExpanded ? "100vh" : "0"};
  transition: max-height 0.2s ease-in-out;
`;

export const ForecastButton = styled.div`
  background-color: goldenrod;
  border: 2px solid rgb(118, 118, 118);
  border-radius: 1vmin;
  color: black;
  font-weight: bold;
  margin: 1vmin;
  font-family: Helvetica, sans-serif;
  font-size: 3vmin;
  padding: 0.75vmin;
`;

export interface iForecastWrapper {
  isExpanded: boolean;
}

export const Forecast: React.FC<{
  query: iQuery;
  weeklyForecastData: iDaily[];
}> = ({ query, weeklyForecastData }) => {
  const [showDetails, setShowDetails] = useState(null);
  const [isForecastExpanded, setIsForecastExpanded] = useState(false);
  const onShowDetails = (event: any) => {
    event.stopPropagation();
    const clickedDay = event.currentTarget.dataset.dayIndex;
    setShowDetails(clickedDay !== showDetails ? clickedDay : null);
  };
  const toggleExpandForecast = () => setIsForecastExpanded(!isForecastExpanded);
  const nextDay = new Date().getDay() + 1;

  return (
    <>
      {!isForecastExpanded && (
        <ForecastButton onClick={toggleExpandForecast}>
          Show full forecast...
        </ForecastButton>
      )}
      <ForecastWrapper isExpanded={isForecastExpanded}>
        {weeklyForecastData.slice(1).map((forecastData, i) => {
          const forecastDay = daysOftheWeek[(nextDay + i) % 7];
          return (
            <ForecastCard
              key={forecastDay}
              forecastDay={{ name: forecastDay, index: i + 1 }}
              forecastData={forecastData}
              onClick={onShowDetails}
              query={query}
            />
          );
        })}
      </ForecastWrapper>
      {showDetails !== null && (
        <ForecastDetails details={weeklyForecastData[Number(showDetails)]} />
      )}
    </>
  );
};
