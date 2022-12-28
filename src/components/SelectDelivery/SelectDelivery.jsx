import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDelivery } from "../../redux/slices/deliverySlice";
import classes from "./SelectDelivery.module.css";

const SelectDelivery = ({selectionList}) => {

  const selection = useSelector((state) => state.deliveryType);
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);

  const selections = selectionList.map((item) => {
    return (
      <option key={item.value} className={classes.option} value={item.value} onClick={()=> {
        dispatch(setDelivery({value: item.value, text: item.text}));
        setIsActive(false)
      }}>
        {item.text}
      </option>
    );
  });

  const handleIsActive = () => {
    setIsActive(!isActive);
  };


  useEffect(() => {
    const hideSelector = (event) => {
      if (event.target.closest(`.${classes.container}`)) {
        return;
      } 
        setIsActive(false);
    };

    document.addEventListener("click", hideSelector);
    return () => document.removeEventListener("click", hideSelector);
  }, []);

  return (
    <div className={`${classes.container}`}>
      <p className={classes.title}>Доставка</p>
      <div className={classes.selected} onClick={handleIsActive}>
        <span>{selection.text}</span>
        <div>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999451 1L5.99945 6L10.9995 1"
              stroke="#14233D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        className={
          isActive
            ? `${classes.select} ${classes["select--active"]}`
            : classes.select
        }
      >
        {selections}
      </div>
    </div>
  );
};

export default SelectDelivery;
