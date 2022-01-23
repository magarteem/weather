import { useEffect, useState } from "react";
//import { useAppSelector } from "../../../redux/app/hooks";

export const Clock = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  //const showPopUp = useAppSelector(
  //  (state) => state.currentWeatherSliceCardsReducer.showPopUp
  //);
  useEffect(() => {
    setInterval(() => {
      //console.log("tt");
      setClock(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return <>{clock}</>;
};

//import { useEffect, useState } from "react";
//import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
//import { togglePopUp } from "../../../redux/redusers/currentWeatherCardsSlice";

//export const Clock = () => {
//  const showPopUp = useAppSelector(
//    (state) => state.currentWeatherSliceCardsReducer.showPopUp
//  );
//  const [clock, setClock] = useState(new Date().toLocaleTimeString());

//  useEffect(() => {
//    let interval: any;
//    if (showPopUp) {
//      interval = setInterval(() => {
//        setClock(new Date().toLocaleTimeString());
//      });
//    } else {
//      return () => clearInterval(interval);
//    }
//  }, [showPopUp]);

//  return <>{clock}</>;
//};
