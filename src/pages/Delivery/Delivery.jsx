import React, { useState } from "react";
import classes from "./Delivery.module.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import InputDate from "../../components/InputDate/InputDate";
import OrderManagementFilters from "../../components/OrderManagementFilters/OrderManagementFilters";
const Delivery = () => {
return (
  <div>
    <OrderManagementFilters />
  </div>
)
};

export default Delivery;
