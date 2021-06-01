import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Form } from "./components/Form";
import { API_KEY } from "./constants";
import { CurrentWeather } from "./components/CurrentWeather";
import Spinner from "./components/Spinner";

const AppWrapper = styled.div`
  position: relative;
  align-items: center;
  background: linear-gradient(navy 40%, lightblue);
  color: white;
  display: flex;
  flex-direction: column;
  font-family: Helvetica, sans-serif;
  justify-content: center;
  min-height: 120vh;
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
  message?: number;
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
  const fetchLocalWeather = (): void => {
    navigator.geolocation?.getCurrentPosition(
      ({ coords }: any) => {
        fetchWeather(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=${query.units}`
        );
      },
      () =>
        setWeatherData({
          ...weatherData,
          loading: false,
          error: "Unable to get user location. Please search manually.",
        })
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchLocalWeather, []);

  const fetchWeather = (queryString: string): void => {
    fetch(queryString)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData({ ...weatherData, data, loading: false });
        setQuery({ ...query, queriedUnits: query.units });
      })
      .catch((error) => {
        setWeatherData({ ...weatherData, error, loading: false });
      });
  };

  const onSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setWeatherData({ ...weatherData, loading: true });
    if (query.city) {
      fetchWeather(
        `https://api.openweathermap.org/data/2.5/weather?q=${query.city}&appid=${API_KEY}&units=${query.units}`
      );
    } else {
      fetchLocalWeather();
    }
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setQuery({ ...query, [`${event.target.dataset.id}`]: event.target.value });
  };

  return (
    <AppWrapper>
      <Spinner isOn={weatherData.loading} />
      <Form onChange={onChangeHandler} onSubmit={onSubmit} value={query} />
      {weatherData.data && (
        <CurrentWeather weatherData={weatherData.data} query={query} />
      )}
    </AppWrapper>
  );
}

export default App;
