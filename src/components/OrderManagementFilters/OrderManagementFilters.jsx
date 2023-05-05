import React, { useState } from "react";
import InputDate from "../InputDate/InputDate";
import Dropdown from "../Dropdown/Dropdown";
import BlueButton from "../BlueButton/BlueButton";
import WhiteButton from "../WhiteButton/WhiteButton";
import classes from "./OrderManagementFilters.module.css";

const OrderManagementFilters = ({ findHandler, clearHandler }) => {
  const [filterParams, setFilterParams] = useState({
    returns_date: "",
    dateStart: "",
    dateFinish: "",
    orderStatus: "",
    rentType: "",
    deliveryType: "",
    paymentType: "",
    paymentStatus: "",
  });

  const dateHandler = (event) => {
    setFilterParams((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const dropdownHandler = (event) => {
    if (event.target.dataset.name) {
      setFilterParams((prevState) => {
        return {
          ...prevState,
          [event.target.dataset.name]: event.target.innerText,
        };
      });
    }
  };

  return (
    <div className={classes.container}>
      <InputDate
        title="Фактическая дата возврата"
        name="returns_date"
        value={filterParams.returns_date}
        onChange={(event) => dateHandler(event)}
      />
      <InputDate
        title="Дата начала аренды"
        name="dateStart"
        value={filterParams.dateStart}
        onChange={(event) => dateHandler(event)}
      />
      <InputDate
        title="Дата конца аренды"
        name="dateFinish"
        value={filterParams.dateFinish}
        onChange={(event) => dateHandler(event)}
      />
      <Dropdown
        name="orderStatus"
        title="Статус заказа"
        optionsList={["в обработке", "доставляется", "в работе", "завершен"]}
        placeholder={"Выберите статус"}
        onClick={(event) => dropdownHandler(event)}
      />
      <Dropdown
        name="rentType"
        title="Тип аренды"
        optionsList={["все","по дням", "2 часа"]}
        placeholder={"Выберите тип"}
        onClick={(event) => dropdownHandler(event)}
      />
      <Dropdown
        name="deliveryType"
        title="Тип доставки"
        optionsList={["самовывоз", "доставка"]}
        placeholder={"Выберите тип"}
        onClick={(event) => dropdownHandler(event)}
      />
      <Dropdown
        name="paymentType"
        title="Тип оплаты"
        optionsList={["онлайн", "на месте"]}
        placeholder={"Выберите тип"}
        onClick={(event) => dropdownHandler(event)}
      />
      <Dropdown
        name="paymentStatus"
        title="Статус оплаты"
        optionsList={["оплачен", "не оплачен"]}
        placeholder={"Выберите тип"}
        onClick={(event) => dropdownHandler(event)}
      />
      <BlueButton
        text="Найти"
        fontSize={20}
        height={60}
        onClick={findHandler}
      />
      <WhiteButton
        text="Сбросить фильтр"
        fontSize={20}
        height={60}
        onClick={clearHandler}
      />
    </div>
  );
};

export default OrderManagementFilters;
