import { createContext, ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export const Context = createContext({});

//any почему  item: string может быть нумбер

const storage = {
  setItem: (name: string, item: string) => {
    localStorage.setItem(name, JSON.stringify(item));
  },
  getItem: (name: string) => {
    const item = localStorage.getItem(name);
    if (item) {
      return JSON.parse(item);
    }
  },
};

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
  const [temeState, setTemeState] = useState(
    storage.getItem("theme") || "light"
  );

  useEffect(() => {
    storage.setItem("theme", temeState);
    changeCssRootVariables(temeState);
  }, [temeState]);

  function changeTheme(temeState: string) {
    setTemeState(temeState);
  }

  return (
    <Context.Provider value={{ temeState, changeTheme }} {...props}>
      {/*// пробрасывает value во всё приложение "children" = это и  есть App*/}
      {children}
    </Context.Provider>
  );
};
