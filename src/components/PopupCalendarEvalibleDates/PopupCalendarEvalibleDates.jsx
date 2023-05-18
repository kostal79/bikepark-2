import React from "react";
import PopupWithCloseCross from "../PopupWithCloseCross/PopupWithCloseCross";
import CalendarBlock from "../Calendar-block/CalendarBlock";
import useGetDisabledDays from "../../hooks/useGetDisabledDays/useGetDisabledDays";
import Spinner from "../Spinner/Spinner"

const PopupCalendarEvalibleDates = ({ bikeId, closePopup }) => {
  const  disabledDays = useGetDisabledDays(bikeId);

  return (
    <PopupWithCloseCross closePopup={closePopup}>
      {disabledDays.length > 0 ? 
      <CalendarBlock disabledDays={disabledDays} /> :
      <Spinner />
      }
    </PopupWithCloseCross>
  );
};

export default PopupCalendarEvalibleDates;
