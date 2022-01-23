import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataWeather } from "../thunk/getDataWeather";
import { Weather } from "../types/types";

type Response = {
  status: number;
  message: string;
};

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  district: string;
  response: Response;
};

const initialState: CurrentWeather = {
  weather: {
    main: {
      temp: 11,
      feels_like: 10, //ощущается
      pressure: "111", // давление
    },
    weather: [
      {
        description: "без осадков",
        id: 0,
        icon: "",
      },
    ],
    wind: {
      speed: 30,
    },
    name: "Тирасполь",
  },
  isLoading: false,
  district: "tiraspol",
  response: {
    status: 0,
    message: "",
  },
};

export const currentWeatherSlice = createSlice({
  name: "current_weather",
  initialState,
  reducers: {
    removeTodo(state, action) {
      state.isLoading = true;
    },
  },

  extraReducers: {
    [getDataWeather.pending.type]: (state: CurrentWeather) => {
      state.isLoading = true;
    },
    [getDataWeather.fulfilled.type]: (
      state: CurrentWeather,
      action: PayloadAction<Weather>
    ) => {
      state.isLoading = false;
      state.weather.main.temp = action.payload.main.temp;
      state.weather.main.feels_like = action.payload.main.feels_like;
      state.weather.main.pressure = action.payload.main.pressure;
      state.weather.name = action.payload.name;
      state.weather.wind.speed = action.payload.wind.speed;
      state.weather.weather[0].description =
        action.payload.weather[0].description;
      state.weather.weather[0].icon = action.payload.weather[0].icon;
    },
    [getDataWeather.rejected.type]: (state, action) => {},
  },
});

export const { removeTodo } = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
