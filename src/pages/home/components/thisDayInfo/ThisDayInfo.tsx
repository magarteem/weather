import s from "./thisDayInfo.module.scss";
import "../../../../assets/images/cloud.png";
import { ThisDayItem } from "./ThisDayItem";
import { useAppSelector } from "../../../../redux/app/hooks";
import { ContentLoaderDayInfo } from "./ContentLoaderDayInfo";
import { Item } from "../../../../redux/types/types";

export const ThisDayInfo = () => {
  const tempNew = useAppSelector((state) => state.currentWeatherSliceReducer);

  //console.log(tempNew);

  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${tempNew.weather.main.temp}° - ощущается как ${tempNew.weather.main.feels_like}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${tempNew.weather.main.pressure} мм ртутного столба`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: `${tempNew.weather.weather[0].description}`,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${tempNew.weather.wind.speed} m/s`,
    },
  ];

  return (
    <div className={s.thisDayInfo}>
      {tempNew.isLoading ? (
        <ContentLoaderDayInfo />
      ) : (
        items.map((item: Item) => (
          <ThisDayItem key={item.value} item={item} tempNew={tempNew} />
        ))
      )}
    </div>
  );
};
