import React, { memo } from "react";
import InputDate from "../InputDate/InputDate";
import BlueButton from "../BlueButton/BlueButton";
import WhiteButton from "../WhiteButton/WhiteButton";
import classes from "./OrderManagementFilters.module.css";
import DropdownControlled from "../DropdownControlled/DropdownControlled";

const OrderManagementFilters = ({
  filterParams,
  findOrders,
  dateHandler,
  dropdownHandler,
  clearHandler,
}) => {
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
      <DropdownControlled
        name="status"
        title="Статус заказа"
        optionsList={["в обработке", "доставляется", "в работе", "завершен"]}
        placeholder={"Выберите статус"}
        value={filterParams.status}
        onClick={(event) => dropdownHandler(event)}
      />
      <DropdownControlled
        name="rentType"
        title="Тип аренды"
        optionsList={["по дням", "2 часа"]}
        placeholder={"Выберите тип"}
        value={filterParams.rentType}
        onClick={(event) => dropdownHandler(event)}
      />
      <DropdownControlled
        name="deliveryType"
        title="Тип доставки"
        optionsList={["самовывоз", "доставка"]}
        placeholder={"Выберите тип"}
        value={filterParams.deliveryType}
        onClick={(event) => dropdownHandler(event)}
      />
      <DropdownControlled
        name="payment_type"
        title="Тип оплаты"
        optionsList={["онлайн", "на месте"]}
        placeholder={"Выберите тип"}
        value={filterParams.payment_type}
        onClick={(event) => dropdownHandler(event)}
      />
      <DropdownControlled
        name="isPaid"
        title="Статус оплаты"
        optionsList={["оплачен", "не оплачен"]}
        placeholder={"Выберите тип"}
        value={filterParams.isPaid}
        onClick={(event) => dropdownHandler(event)}
      />
      <BlueButton text="Найти" fontSize={20} height={60} onClick={findOrders} />
      <WhiteButton
        text="Сбросить фильтр"
        fontSize={20}
        height={60}
        onClick={clearHandler}
      />
    </div>
  );
};

export default memo(OrderManagementFilters, (prev, next) => {
  return prev.filterParams === next.filterParams;
});
