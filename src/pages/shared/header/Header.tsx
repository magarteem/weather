import { GlobalSvgSelector } from "../../../assets/icons/global/globalSvgSelector";
import { SelectComponent } from "./components/SelectComponent";
import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoBlock}>
        <GlobalSvgSelector id="header-logo" />
        <span>React weather</span>
      </div>
      <SelectComponent />
    </header>
  );
};
