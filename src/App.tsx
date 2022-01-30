import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/components/Home";
import { MonthStatistic } from "./pages/monthStatistic/components/MonthStatistic";
import { Header } from "./pages/shared/header/Header";
import { PopUp } from "./pages/shared/popUp/PopUp";
import { createContext } from "react";
import { useAppSelector } from "./redux/app/hooks";

export const PopUpProvider = createContext({});

function App() {
  const statusPopUp = useAppSelector(
    (state) => state.currentWeatherSliceCardsReducer.popUp.showPopUp
  );

  return (
    <div className="wrap">
      {statusPopUp && <PopUp />}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/month-statistic/*" element={<MonthStatistic />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
