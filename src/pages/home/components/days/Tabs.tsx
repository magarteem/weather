import { NavLink } from "react-router-dom";
import s from "./days.module.scss";

export interface Day {
  value: string;
  numberDay: number;
  link: string;
}
const tabs: Day[] = [
  { value: "На неделю", numberDay: 7, link: "/" },
  { value: "На 5 дней", numberDay: 5, link: "/five_day" },
  { value: "На 3 дня", numberDay: 3, link: "/three_day" },
];

export const Tabs = ({ getAnyNumberDayFu }: any) => {
  return (
    <div className={s.tabs}>
      <div className={s.tabsButton}>
        {tabs.map((x: Day) => (
          <NavLink
            to={x.link}
            key={x.value}
            onClick={() => getAnyNumberDayFu(x.numberDay)}
            className={({ isActive }) =>
              s.__btnItem + " " + (isActive ? s.activ : "")
            }
          >
            {x.value}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
