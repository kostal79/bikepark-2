import React from "react";
import BlueButton from "@components/BlueButton/BlueButton";
import useSearchBikes from "@hooks/useSearchBikes/useSearchBikes";
import { useSelector } from "react-redux";
import {
  selectedDateFinish,
  selectedDateStart,
} from "@redux/slices/calendarSlice";
import classes from "./FindBikeButton.module.css"

const FindBikeButton = () => {
  const [, getBikes] = useSearchBikes();
  const dateStart = useSelector(selectedDateStart);
  const dateFinish = useSelector(selectedDateFinish);

  const searchHandler = (num) => {
    if (dateStart && dateFinish) {
      getBikes(num);
    } else {
      alert("Choose dates");
    }
  };
  return (
    <div className={classes.button}>
      <BlueButton
        width={300}
        height={60}
        text={"Найти"}
        uppercase={false}
        fontSize={18}
        onClick={() => searchHandler(8)}
      />
    </div>
  );
};

export default FindBikeButton;
