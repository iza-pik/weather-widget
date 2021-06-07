import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Form } from "./components/Form";
import { API_KEY } from "./constants";
import { CurrentWeather } from "./components/CurrentWeather";
import Spinner from "./components/Spinner";
import { Forecast } from "./components/Forecast";

const AppWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  background: linear-gradient(navy 40%, lightblue);
  color: white;
  display: flex;
  flex-direction: column;
  font-family: Helvetica, sans-serif;
  justify-content: center;
  min-height: 100vh;
  padding-top: 0;
  text-align: center;
`;

export interface iCurrent {
  sunrise: number;
  sunset: number;
  temp: number;
  pressure: number;
  humidity: number;
  weather: iWeather[];
}

export interface iDaily {
  sunrise: number;
  sunset: number;
  temp: iTemp;
  pressure: number;
  humidity: number;
  weather: iWeather[];
}

export interface iTemp {
  day: number;
}

export interface iWeather {
  description: string;
  icon: string;
}

export interface iWeatherData {
  error: string;
  loading: boolean;
  data: { current: iCurrent; daily: iDaily[] } | null;
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
    queriedUnits: "metric",
  });
  const [weatherData, setWeatherData] = useState<iWeatherData>({
    error: "",
    loading: false,
    data: null,
  });
  const fetchLocalWeather = (): void => {
    navigator.geolocation?.getCurrentPosition(
      ({ coords }: any) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=${query.units}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Unable to fetch data");
            }
            return response.json();
          })
          .then((response) => {
            fetchWeather(
              `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=${query.units}`
            );
            setQuery({ ...query, city: response.name });
          });
      },
      () =>
        setWeatherData({
          data: null,
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
        setWeatherData({ ...weatherData, data, loading: false, error: "" });
      })
      .catch(() => {
        setWeatherData({
          data: null,
          error: `Unable to fetch information for ${query.city}`,
          loading: false,
        });
      });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setWeatherData({ ...weatherData, loading: true });
    if (query.city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query.city}&appid=${API_KEY}&units=${query.units}`
      )
        .then((res) => {
          if (!res.ok) throw new Error("Unable to fetch city location");
          return res.json();
        })
        .then(({ coord }) => {
          fetchWeather(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}&units=${query.units}`
          );
        });
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
        <CurrentWeather weatherData={weatherData.data.current} query={query} />
      )}
      {weatherData.data && (
        <Forecast weeklyForecastData={weatherData.data.daily} query={query} />
      )}
      {weatherData.error && <h2>{weatherData.error}</h2>}
    </AppWrapper>
  );
}

export default App;
