import { createAsyncThunk } from "@reduxjs/toolkit";
//@ts-ignore
export const getWeatherForCards = createAsyncThunk(
  "current_weather/getWeatherForCards",
  async function (selectedOption: any, { rejectWithValue }) {
    const { lat, lon } = selectedOption;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ru&exclude=minutely,hourly&appid=f7a72a2564c886821058f0ff2b8cb53a`
      );
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();
      //let data = {};
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//7 дней
//https://api.openweathermap.org/data/2.5/onecall?lat=46.835992&lon=29.611091&units=metric&lang=ru&appid=f7a72a2564c886821058f0ff2b8cb53a

// долгота - lat | штрота - lon
//Днестровск 46.623465, 29.910923
//Слободзея 46.743202, 29.695353
//Тирасполь 46.835992, 29.611091
//Бендеры 46.823091, 29.481901
//Григориополь 47.146258, 29.293545
//Дубосары 47.268725, 29.149474
//Рыбница 47.146258, 29.293545
//Каменка 48.031631, 28.698002
