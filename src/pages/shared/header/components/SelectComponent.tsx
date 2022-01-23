import Select from "react-select";
import s from "./../header.module.scss";
import { GlobalSvgSelector } from "../../../../assets/icons/global/globalSvgSelector";
import { useContext, useEffect, useState } from "react";
import { useAppDispatch } from "../../../../redux/app/hooks";
import { getDataWeather } from "../../../../redux/thunk/getDataWeather";
import { getWeatherForCards } from "../../../../redux/thunk/getWeatherForCards";
import { Context } from "../../../../contextProvider/ThemeContext";

type OptionsTypeValue = {
  lat: number;
  lon: number;
};
interface OptionsType {
  value: OptionsTypeValue;
  label: string;
}

const options: OptionsType[] = [
  { value: { lat: 46.623465, lon: 29.910923 }, label: "Днестровск" },
  { value: { lat: 46.743202, lon: 29.695353 }, label: "Слободзея" },
  { value: { lat: 46.835992, lon: 29.611091 }, label: "Тирасполь" },
  { value: { lat: 46.823091, lon: 29.481901 }, label: "Бендеры" },
  { value: { lat: 47.146258, lon: 29.293545 }, label: "Григориополь" },
  { value: { lat: 47.268725, lon: 29.149474 }, label: "Дубосары" },
  { value: { lat: 47.146258, lon: 29.293545 }, label: "Рыбница" },
  { value: { lat: 48.031631, lon: 28.698002 }, label: "Каменка" },
];

export const SelectComponent = () => {
  const { temeState, changeTheme }: any = useContext(Context);
  const dispatch = useAppDispatch();
  const [selectedOption, setSelectedOption] = useState<
    OptionsTypeValue | undefined
  >();

  useEffect(() => {
    dispatch(getDataWeather(selectedOption));
    dispatch(getWeatherForCards(selectedOption));
  }, [selectedOption, dispatch]);

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      display: "flex",
      aliganItems: "center",
      backgroundColor:
        temeState === "dark" ? "#4f4f4f" : "rgb(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      borderRadius: "10px",
      border: "none",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: temeState === "dark" ? "#fff" : " #000",
    }),
  };
  function temeFu() {
    changeTheme(temeState === "light" ? "dark" : "light");
  }

  return (
    <div className={s.selectCountry}>
      <div className={s.themeSelect} onClick={temeFu}>
        <GlobalSvgSelector id="water-drop" />
      </div>
      <Select
        //value={selectedOption}
        options={options}
        styles={colorStyles}
        defaultValue={options[2]}
        onChange={(e) => setSelectedOption(e?.value)}
      />
    </div>
  );
};
