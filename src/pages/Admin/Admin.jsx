import React, { useState } from "react";
import OrderManagementFilters from "../../components/OrderManagementFilters/OrderManagementFilters";
import Bridge from "../../components/Bridge/Bridge";
import classes from "./Admin.module.css";
import AdminOrdersTable from "../../components/AdminOrdersTable/AdminOrdersTable";
import { useAllUserOrders } from "../../hooks/useAllUserOrders/useAllUserOrders";

const Admin = () => {
    const [filterParams, setFilterParams] = useState({
        returns_date: "",
        dateStart: "",
        dateFinish: "",
        status: "",
        rentType: "",
        deliveryType: "",
        payment_type: "",
        isPaid: "",
      });



      const madeParamsForQuery = (params) => {
        const query = {};
        for (let [key, value] of Object.entries(filterParams)) {
          if (value) {
            query[key] = value;
          }
        }
        return query;
      }

      const [orders, getOrders, isLoading] = useAllUserOrders(madeParamsForQuery(filterParams), 3);
    
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

      const clearHandler = () => {
        setFilterParams({
          returns_date: "",
          dateStart: "",
          dateFinish: "",
          status: "",
          rentType: "",
          deliveryType: "",
          payment_type: "",
          isPaid: "",
        })
      }

  return (
    <div className={classes.container}>
      <div className={classes.container__upper}>
        <h1 className={classes.title}>Управление заказами</h1>
        <OrderManagementFilters
        filterParams={filterParams}
        getOrders={getOrders}
        dateHandler={dateHandler}
        dropdownHandler={dropdownHandler}
        clearHandler={clearHandler}
        />
      </div>
      <Bridge />
      <AdminOrdersTable orders={orders} isLoading={isLoading}/>
    </div>
  );
};

export default Admin;
