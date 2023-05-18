import React, { memo } from "react";
import { useSelector } from "react-redux";
import isBooked from "../../utils/isBooked/isBooked";
import EvalibleBike from "./EvalibleBike/EvalibleBike";
import NotEvalibleBike from "./NotEvalibleBike/NotEvalibleBike";
import { getOrderDates } from "../../redux/slices/calendarSlice";

const BikeCardSmall = (props) => {
  const { bookedDates } = props;
  const { dateStart, dateFinish, timeStart, timeFinish } =
    useSelector(getOrderDates);


  if (
    bookedDates &&
    isBooked(dateStart, timeStart, dateFinish, timeFinish, bookedDates)
  ) {
    return <NotEvalibleBike {...props} />;
  } else {
    return (
      <>
        <EvalibleBike
          {...props}
        />
      </>
    );
  }
};

export default memo(BikeCardSmall);
