import { GlobalSvgSelector } from "../../../../assets/icons/global/globalSvgSelector";
import { Item, Weather } from "../../../../redux/types/types";

import s from "./thisDayInfo.module.scss";

type Props = {
  tempNew: Weather | any;
  item: Item;
};

export const ThisDayItem = ({ item, tempNew }: Props) => {
  return (
    <div className={s.thisDayItem}>
      <div className={s.imgIndicator}>
        <GlobalSvgSelector id={item.icon_id} />
      </div>
      <span className={s.dayItemName}>{item.name}</span>
      <span className={s.dayItemData}>{item.value}</span>
    </div>
  );
};
