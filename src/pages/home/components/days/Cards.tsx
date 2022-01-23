import { GlobalSvgSelector } from "../../../../assets/icons/global/globalSvgSelector";
import { OneWeatherDayType } from "../../../../redux/types/types";
//import { useAppDispatch } from "../../../../redux/app/hooks";
//import { togglePopUp } from "../../../../redux/redusers/currentWeatherCardsSlice";
import s from "./days.module.scss";

interface Props {
  days: OneWeatherDayType;
  togglePopUpFU: any; //() => void;
}

export const Cards = ({ days, togglePopUpFU }: Props) => {
  const { dt, temp, weather } = days;

  //const disdatch = useAppDispatch();
  //function togglePopUpFU() {
  //  disdatch(togglePopUp());
  //}

  const date = new Date(dt * 1000);
  let day = "";
  switch (date.getDay()) {
    case new Date().getDay():
      day = "Сегодня";
      break;
    case new Date().getDay() + 1:
      day = "Завтра";
      break;
    case 1:
      day = "Пн";
      break;
    case 2:
      day = "Вт";
      break;
    case 3:
      day = "Ср";
      break;
    case 4:
      day = "Чт";
      break;
    case 5:
      day = "Пт";
      break;
    case 6:
      day = "Сб";
      break;
    case 0:
      day = "Вс";
      break;
    default:
      break;
  }

  return (
    <div className={s.cards} onClick={() => togglePopUpFU(dt)}>
      <div className={s.dayOfWeek}>{day}</div>
      <div className={s.dayOfTheMonth}>{`${date.toLocaleDateString()}`}</div>
      <div className={s.weather_svg}>
        <GlobalSvgSelector id={weather[0].icon} />
      </div>
      <div className={s.temperatureDay}>
        {temp.day >= 1 ? `+${Math.round(temp.day)}` : Math.round(temp.day)}
      </div>
      <div className={s.temperatureNight}>
        {temp.night >= 1
          ? `+${Math.round(temp.night)}`
          : Math.round(temp.night)}
      </div>
      <div className={s.precipitation}>{weather[0].description}</div>
    </div>
  );
};
