import { ThisDayItem } from "../../home/components/thisDayInfo/ThisDayItem";
import s from "./popUp.module.scss";
import closePopUp from "../../../assets/images/closePopUp.png";
import { GlobalSvgSelector } from "../../../assets/icons/global/globalSvgSelector";
import { Clock } from "../clock/Clock";
import { closeModalPopUp } from "../../../redux/redusers/currentWeatherCardsSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { Item } from "../../../redux/types/types";

export const PopUp = () => {
  const disdatch = useAppDispatch();

  const tempNew = useAppSelector(
    (state) => state.currentWeatherSliceCardsReducer.popUp.popUpState
  );
  function closeModalPopUpFU() {
    disdatch(closeModalPopUp());
  }

  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${tempNew.temp.day}° - ощущается как ${tempNew.feels_like.day}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${tempNew.pressure} мм ртутного столба`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: `${tempNew.weather.description}`,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${tempNew.wind_speed}м/с - легкий ветер`,
    },
  ];
  const data = new Date(tempNew.dt * 1000);

  return (
    <>
      <div className={s.blure} onClick={closeModalPopUpFU}></div>
      <div className={s.popUp}>
        <div className={s.popUpLeft}>
          <div className={s.__temperature}> {`${tempNew.temp.day}`}&deg;</div>
          <div className={s.dayNew}>{data.toLocaleDateString()}</div>
          <div className={s.iconWether}>
            <GlobalSvgSelector id={tempNew.weather.icon} />
          </div>
          <div className={s.info}>
            <p>
              Время <Clock />
            </p>
            {/*<p>город: {`${temp.name}`}</p>*/}
          </div>
        </div>

        <div className={s.popUpContent}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.value} item={item} tempNew={tempNew} />
          ))}
        </div>
        <div className={s.closeBtn} onClick={closeModalPopUpFU}>
          <img src={closePopUp} alt="closePopUp" />
        </div>
      </div>
    </>
  );
};
