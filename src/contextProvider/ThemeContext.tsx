import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Props {
  children: ReactNode;
}

export const Context = createContext({});

function changeCssRootVariables(temeState: string) {
  const root = document.querySelector(":root") as HTMLElement;
  const components = [
    "body-background",
    "components-background",
    "card-background",
    "card-shadow",
    "text-color",
  ];
  components.forEach((component) => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${temeState})`
    );
  });
}

export const ThemeContext = ({ children, ...props }: Props) => {
  const [nameTheme, setNameTheme] = useLocalStorage("theme", "");
  const [temeState, setTemeState] = useState(nameTheme || "light");

  useEffect(() => {
    setNameTheme(temeState);
    changeCssRootVariables(temeState);
  }, [setNameTheme, temeState]);

  function changeTheme(teme: string) {
    setTemeState(teme);
  }

  return (
    <Context.Provider value={{ temeState, changeTheme }} {...props}>
      {/*// пробрасывает value во всё приложение "children" = это и  есть App*/}
      {children}
    </Context.Provider>
  );
};
