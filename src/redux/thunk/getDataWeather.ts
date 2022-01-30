import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDataWeather = createAsyncThunk(
  "current_weather/getDataWeather",
  async function (selectedOption: any, { rejectWithValue }) {
    const { lat, lon } = selectedOption;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&exclude=minutely,hourly&appid=f7a72a2564c886821058f0ff2b8cb53a`
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
