import s from "./days.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/app/hooks";
import { togglePopUp } from "../../../../redux/redusers/currentWeatherCardsSlice";
import { Cards } from "./Cards";
import { ContentLoadeCards } from "./ContentLoadeCards";
import { Tabs } from "./Tabs";
import { useGetAnyNumberDay } from "../../../../hooks/getAnyNumberDay";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";

export const Days = () => {
  const [day, setDay] = useLocalStorage("numberDay", "7");

  const [anyNumber, setAnyNumber] = useState<number | undefined>(day || "7");
  useEffect(() => {
    setDay(anyNumber);
  }, [anyNumber, setDay]);
  const hookGetAnyNumberDay = useGetAnyNumberDay(anyNumber);

  const disdatch = useAppDispatch();
  const dataCardsWeather = useAppSelector(
    (state) => state.currentWeatherSliceCardsReducer
  );

  function togglePopUpFU(dt: number) {
    disdatch(togglePopUp(dt));
  }

  const getAnyNumberDayFu = (num: number) => {
    setAnyNumber(num);
  };

  return (
    <>
      <Tabs getAnyNumberDayFu={getAnyNumberDayFu} day={day} />
      <div className={s.days}>
        {dataCardsWeather.isLoading
          ? [1, 1, 1, 1, 1, 1, 1].map((e, index) => (
              <ContentLoadeCards key={index} />
            ))
          : hookGetAnyNumberDay.map((x: any) => (
              <Cards key={x.dt} days={x} togglePopUpFU={togglePopUpFU} />
            ))}
      </div>
    </>
  );
};
//@ почему сетстээйт не обновляет  состояние после 3го вызова с одним  и тем же значением
//или вообще не вызывается после  1го раза ?
