import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Form } from "./components/Form";
import { API_KEY } from "./constants";
import { CurrentWeather } from "./components/CurrentWeather";

const AppWrapper = styled.div`
  min-height: 80vh;
  background-color: navy;
  color: white;
`;

export interface iQuery {
  city: string;
  units: string;
}

export interface iWeatherData {
  error: string;
  loading: boolean;
  data: any;
}

function App() {
  const [query, setQuery] = useState<iQuery>({ city: "", units: "" });
  const [weatherData, setWeatherData] = useState<iWeatherData>({
    error: "",
    loading: false,
    data: {},
  });
  const onSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setWeatherData({ ...weatherData, loading: true });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query.city}&appid=${API_KEY}&units=${query.units}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData({ ...weatherData, data, loading: false });
        console.log(weatherData.data);
      })
      .catch((error) => {
        setWeatherData({ ...weatherData, error, loading: false });
      });
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setQuery({ ...query, [`${event.target.dataset.id}`]: event.target.value });
  };

  return (
    <AppWrapper>
      {weatherData.loading && "Loading..."}
      <Form onChange={onChangeHandler} onSubmit={onSubmit} value={query} />
      {weatherData.data && (
        <CurrentWeather weatherData={weatherData.data} query={query} />
      )}
    </AppWrapper>
  );
}

export default App;
