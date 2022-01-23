import { useAppSelector } from "../redux/app/hooks";

export const useGetAnyNumberDay = (numberOfDays: number | undefined) => {
  const daily = useAppSelector(
    (state) => state.currentWeatherSliceCardsReducer.getWeather.daily
  );
  return daily.slice(0, numberOfDays);
};
