import React from "react";
import { useDispatch } from "react-redux";
import { setDelivery } from "../../redux/slices/deliverySlice";
import Dropdown from "../Dropdown/Dropdown";
import Toggler from "../Toggler/Toggler";
import SelectDate from "../SelectDate/SelectDate";
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
