import React, { memo } from "react";
import { useSelector } from "react-redux";
import BikeCardSmall from "@components/BikeCardSmall/BikeCardSmall";
import PopupBook from "@components/PopupBook/PopupBook";
import { getBikeForOrder } from "@redux/slices/orderBikeSlice";
import BlueButton from "@components/BlueButton/BlueButton";
import classes from "./FilteringResult.module.css";

const FilteringResult = ({ moreButtonHandler, amount, allResults }) => {
  const bikesInOrder = useSelector(getBikeForOrder);


    const filteredBikes = allResults.map((bikeCard) => (
      <BikeCardSmall {...bikeCard} key={bikeCard.id} />
    ));

  return (
    <>
      <ul className={classes.list}>{filteredBikes && filteredBikes}</ul>
      <div className={classes.button}>
        <BlueButton
          text="Далее"
          height={60}
          width={300}
          fontSize={18}
          onClick={moreButtonHandler}
          disabled={allResults.length < amount ? true : false}
        />
      </div>
      {bikesInOrder.length > 0 && <PopupBook />}
    </>
  );
};

export default memo(FilteringResult);
