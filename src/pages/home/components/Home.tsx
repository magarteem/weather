import { useEffect } from "react";
import { useAppDispatch } from "../../../redux/app/hooks";
import { getDataWeather } from "../../../redux/thunk/getDataWeather";
import { getWeatherForCards } from "../../../redux/thunk/getWeatherForCards";
import { Days } from "./days/Days";
import s from "./home.module.scss";
import { ThisDay } from "./thisDay/ThisDay";
import { ThisDayInfo } from "./thisDayInfo/ThisDayInfo";

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDataWeather({ lat: 46.835992, lon: 29.611091 }));
    dispatch(getWeatherForCards({ lat: 46.835992, lon: 29.611091 }));
  }, [dispatch]);

  return (
    <div className={s.home}>
      <section className={s.weatherInfo}>
        <ThisDay />
        <ThisDayInfo />
      </section>
      <Days />
    </div>
  );
};
