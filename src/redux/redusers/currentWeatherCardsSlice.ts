import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {} from "../thunk/getDataWeather";
import { getWeatherForCards } from "../thunk/getWeatherForCards";
import {
  OneWeatherDayType,
  ResponseError,
  WeatherOllType,
} from "../types/types";

type DayliType = {
  dt: number | undefined | any;
  temp: {
    day: number | undefined;
  };
  weather: {
    icon: string | undefined;
    description: string | undefined;
  };
  feels_like: {
    day: number | undefined;
  };
  pressure: number | undefined;
  humidity: number | undefined;
  wind_speed: number | undefined;
};

type CardsWeather = {
  getWeather: WeatherOllType;
  isLoading: boolean;
  popUp: {
    showPopUp: boolean;
    popUpState: DayliType;
  };
  error: {
    cod: string;
    message: string;
  };
};

const initialState: CardsWeather = {
  getWeather: {
    timezone: "Europe/Chisinau",
    current: {
      dt: 1642287682,
      temp: 2.18,
      feels_like: -3.32,
      pressure: 1021,
      humidity: 71,
      clouds: 57,
      wind_speed: 7.52,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "облачно с прояснениями",
          icon: "04n",
        },
      ],
    },
    daily: [
      {
        dt: 1642413600,
        temp: {
          day: 3.26,
          min: -1.03,
          max: 5,
          night: 1.57,
          morn: 0.27,
        },
        feels_like: {
          day: -0.1,
          night: -4.85,
          morn: -4.41,
        },
        pressure: 1013,
        humidity: 48,
        wind_speed: 9.67,
        weather: [
          {
            id: 600,
            main: "Snow",
            description: "небольшой снег",
            icon: "13d",
          },
        ],
        clouds: 100,
      },
    ],
  },
  popUp: {
    showPopUp: false,
    popUpState: {
      dt: 0,
      temp: {
        day: 0,
      },
      weather: {
        icon: "",
        description: "",
      },
      feels_like: {
        day: 0,
      },
      pressure: 0,
      humidity: 0,
      wind_speed: 0,
    },
  },
  isLoading: false,
  error: {
    cod: "",
    message: "",
  },
};

export const currentWeatherSliceCards = createSlice({
  name: "weather_cards",
  initialState,
  reducers: {
    togglePopUp(state: CardsWeather, action: PayloadAction<number>) {
      state.popUp.showPopUp = !state.popUp.showPopUp;
      const find = state.getWeather.daily.find(
        (x: OneWeatherDayType) => x.dt === action.payload
      );
      state.popUp.popUpState.dt = find?.dt;
      state.popUp.popUpState.humidity = find?.humidity;
      state.popUp.popUpState.temp.day = find?.temp.day;
      state.popUp.popUpState.weather.icon = find?.weather[0].icon;
      state.popUp.popUpState.feels_like.day = find?.feels_like.day;
      state.popUp.popUpState.pressure = find?.pressure;
      state.popUp.popUpState.wind_speed = find?.wind_speed;
      state.popUp.popUpState.weather.description = find?.weather[0].description;
    },
    closeModalPopUp(state: CardsWeather) {
      state.popUp.showPopUp = !state.popUp.showPopUp;
    },
  },

  extraReducers: {
    [getWeatherForCards.pending.type]: (state: CardsWeather) => {
      state.isLoading = true;
    },

    [getWeatherForCards.fulfilled.type]: (
      state: CardsWeather,
      action: PayloadAction<WeatherOllType>
    ) => {
      state.isLoading = false;
      action.payload.daily.pop();
      state.getWeather.daily = action.payload.daily;
    },

    [getWeatherForCards.rejected.type]: (
      state: CardsWeather,
      action: PayloadAction<ResponseError>
    ) => {
      state.error.message = "222";
      //state.error.message = action.payload.message;
    },
  },
});

export const { togglePopUp, closeModalPopUp } =
  currentWeatherSliceCards.actions;
export default currentWeatherSliceCards.reducer;
