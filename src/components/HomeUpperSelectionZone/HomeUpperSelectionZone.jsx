import React from "react";
import { useDispatch } from "react-redux";
import { setDelivery } from "../../redux/slices/deliverySlice";
import Dropdown from "../Dropdown/Dropdown";
import RentType from "../RentType/RentType";
import SelectDate from "../SelectDate/SelectDate";
import classes from "./HomeUpperSelectionZone.module.css";

const HomeUpperSelectionZone = () => {
  const dispatch = useDispatch();
  const onClickDelivery = (event) => dispatch(setDelivery({value: event.target.innerText}))


  return (
    <section className={classes.selections}>
      <RentType className={classes.rentType} />
      <SelectDate className={classes.selectDate} />
      <Dropdown
        optionsList={["Самовывоз" ,"Доставка" ]}
        onClick={onClickDelivery}
        title="Доставка"
      />
    </section>
  );
};

export default HomeUpperSelectionZone;
