import React from "react";
import PopupWithCloseCross from "../PopupWithCloseCross/PopupWithCloseCross";
import { useDispatch } from "react-redux";
import { setPopupCalendar } from "../../redux/slices/popupSlice";
import CalendarBlock from "../Calendar-block/CalendarBlock";

const PopupCalendar = () => {
  const dispatch = useDispatch();
  const closePopup = () => {
      dispatch(setPopupCalendar(false))
  }
  return (
    <PopupWithCloseCross closePopup={closePopup}>
      <CalendarBlock />
    </PopupWithCloseCross>
  );
};

export default PopupCalendar;