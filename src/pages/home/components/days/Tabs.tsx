import { useState } from "react";
import s from "./days.module.scss";

export interface Day {
  value: string;
  numberDay: string;
  activ: boolean;
}

export const Tabs = ({ getAnyNumberDayFu, day }: any) => {
  const [buttonActiv, setButtonActiv] = useState<Array<Day>>([
    { value: "На неделю", numberDay: "7", activ: day === "7" },
    { value: "На 5 дней", numberDay: "5", activ: day === "5" },
    { value: "На 3 дня", numberDay: "3", activ: day === "3" },
  ]);

  const setActivButton = (inValue: string) => {
    const state = buttonActiv.map((x) => {
      if (x.value === inValue) {
        return {
          ...x,
          activ: !x.activ,
        };
      } else {
        return {
          ...x,
          activ: false,
        };
      }
    });
    setButtonActiv(state);
  };

  return (
    <div className={s.tabs}>
      <div className={s.tabsButton}>
        {buttonActiv.map((x: Day) => (
          <button
            key={x.value}
            onClick={() => {
              getAnyNumberDayFu(x.numberDay);
              setActivButton(x.value);
            }}
            className={s.__btnItem + " " + (x.activ ? s.activ : "")}
          >
            {x.value}
          </button>
        ))}
      </div>
    </div>
  );
};
