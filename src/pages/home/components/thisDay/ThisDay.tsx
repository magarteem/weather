import { GlobalSvgSelector } from "../../../../assets/icons/global/globalSvgSelector";
import { useAppSelector } from "../../../../redux/app/hooks";
import { Clock } from "../../../shared/clock/Clock";
import s from "./thisDay.module.scss";

export const ThisDay = () => {
  const tempNew = useAppSelector((state) => state.currentWeatherSliceReducer);
  return (
    <div className={s.thisDay}>
      <div className={s.dayUP}>
        <div className={s.__degree}>
          <span className={s.__degreeNumneb}>
            {tempNew.weather.main.temp}&deg;
          </span>
          <span className={s.__degreeDay}>Сейчас</span>
        </div>
        <div className={s.__svg}>
          <GlobalSvgSelector id={tempNew.weather.weather[0].icon} />
        </div>
      </div>

      <div className={s.dayDown}>
        <p className={s.newTime}>
          Время: <Clock />
        </p>
        <p className={s.town}>Город: {`${tempNew.weather.name}`}</p>
      </div>
    </div>
  );
};
