import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDataWeather = createAsyncThunk(
  "current_weather/getDataWeather",
  async function (selectedOption: any, { rejectWithValue }) {
    const { lat, lon } = selectedOption;

    //console.log(selectedOption);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&exclude=minutely,hourly&appid=f7a72a2564c886821058f0ff2b8cb53a`
      );

      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//lat=46.623465&lon=29.910923
//`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ru&exclude=minutely,hourly&appid=f7a72a2564c886821058f0ff2b8cb53a`
