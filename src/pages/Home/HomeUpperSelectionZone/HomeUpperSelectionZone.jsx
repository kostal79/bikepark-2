import React from "react";
import { useDispatch } from "react-redux";
import { setDelivery } from "@redux/slices/deliverySlice";
import Dropdown from "@components/Dropdown/Dropdown";
import Toggler from "@components/Toggler/Toggler";
import SelectDate from "@components/SelectDate/SelectDate";
import classes from "./HomeUpperSelectionZone.module.css";

const HomeUpperSelectionZone = () => {
  const dispatch = useDispatch();
  const onClickDelivery = (event) =>
    dispatch(setDelivery(event.target.innerText));

  return (
    <section className={classes.selections}>
      <div className={classes.rentType}>
        <Toggler />
      </div>
      <div className={classes.selectDate}>
        <SelectDate  />
      </div>
      <Dropdown
        optionsList={["самовывоз", "доставка"]}
        onClick={onClickDelivery}
        title="Доставка"
      />
    </section>
  );
};

export default HomeUpperSelectionZone;
