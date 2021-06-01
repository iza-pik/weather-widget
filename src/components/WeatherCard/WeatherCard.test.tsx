import React from "react";
import { WeatherCard } from ".";
import { render, screen } from "@testing-library/react";

const mockWeatherData = {
  coord: { lon: -0.2243, lat: 51.4792 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
  base: "stations",
  main: {
    temp: 13.45,
    feels_like: 12.86,
    temp_min: 10.54,
    temp_max: 15.34,
    pressure: 1018,
    humidity: 77,
  },
  visibility: 10000,
  wind: { speed: 0.45, deg: 86, gust: 1.79 },
  clouds: { all: 0 },
  dt: 1622504482,
  sys: {
    type: 2,
    id: 2031341,
    country: "GB",
    sunrise: 1622519376,
    sunset: 1622578094,
  },
  timezone: 3600,
  id: 2647567,
  name: "York",
  cod: 200,
};

const mockQuery = {
  city: "York",
  units: "metric",
  queriedUnits: "metric",
};

test("renders elements", () => {
  render(<WeatherCard weatherData={mockWeatherData} query={mockQuery} />);
  const WeatherDataElement = screen.getByText(/york/i);
  expect(WeatherDataElement).toBeInTheDocument();
});
