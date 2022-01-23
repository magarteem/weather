import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import currentWeatherSlice from "../redusers/currentWeatherSlice";
import currentWeatherSliceCards from "../redusers/currentWeatherCardsSlice";

export const store = configureStore({
  reducer: {
    currentWeatherSliceReducer: currentWeatherSlice,
    currentWeatherSliceCardsReducer: currentWeatherSliceCards,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
