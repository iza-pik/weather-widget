import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "./components/Form";
import { API_KEY } from "./constants";
import { CurrentWeather } from "./components/CurrentWeather";

const AppWrapper = styled.div`
  align-items: center;
  background-color: navy;
  color: white;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-top: 0;
  text-align: center;
`;

export interface iClouds {
  all: number;
}

export interface iCoord {
  lon: number;
  lat: number;
}

export interface iData {
  coord: iCoord;
  weather: iWeather[];
  base: string;
  main: iMain;
  visibility: number;
  wind: iWind;
  clouds: iClouds;
  dt: number;
  sys: iSys;
  id: number;
  name: string;
  cod: number;
}

export interface iMain {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface iSys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface iWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface iWeatherData {
  error: string;
  loading: boolean;
  data: iData | null;
}

export interface iWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface iQuery {
  city: string;
  units: string;
  queriedUnits: string;
}

function App() {
  const [query, setQuery] = useState<iQuery>({
    city: "",
    units: "metric",
    queriedUnits: "",
  });
  const [weatherData, setWeatherData] = useState<iWeatherData>({
    error: "",
    loading: false,
    data: null,
  });
  // useEffect(() => {}, []);
  // console.log(Geolocation.getCurrentPosition();
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
        setQuery({ ...query, queriedUnits: query.units });
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
