import { GlobalSvgSelector } from "../../../assets/icons/global/globalSvgSelector";
import { SelectComponent } from "./components/SelectComponent";
import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoBlock}>
        <div className={s.buttonPulsar}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <span>React weather</span>
      </div>
      <SelectComponent />
    </header>
  );
};
