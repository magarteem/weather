import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataWeather } from "../thunk/getDataWeather";
import { ResponseError, Weather } from "../types/types";

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  district: string;
  error: ResponseError;
};

const initialState: CurrentWeather = {
  weather: {
    main: {
      temp: 0,
      feels_like: 0, //ощущается
      pressure: "", // давление
    },
    weather: [
      {
        description: "",
        id: 0,
        icon: "",
      },
    ],
    wind: {
      speed: 0,
    },
    name: "",
  },
  isLoading: false,
  district: "",
  error: {
    cod: "",
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
      state.weather.main.temp = +action.payload.main.temp.toFixed(1);
      state.weather.main.feels_like = action.payload.main.feels_like;
      state.weather.main.pressure = action.payload.main.pressure;
      state.weather.name = action.payload.name;
      state.weather.wind.speed = action.payload.wind.speed;
      state.weather.weather[0].description =
        action.payload.weather[0].description;
      state.weather.weather[0].icon = action.payload.weather[0].icon;
    },
    [getDataWeather.rejected.type]: (
      state: CurrentWeather,
      action: PayloadAction<ResponseError>
    ) => {
      //console.log(action.payload.message);
      //state.error.cod = action.payload.cod;
      state.error.message = action.payload.message;
    },
  },
});

export const { removeTodo } = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
