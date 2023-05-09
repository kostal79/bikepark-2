import React, { useRef, useState } from "react";
import OrderManagementFilters from "../../components/OrderManagementFilters/OrderManagementFilters";
import Bridge from "../../components/Bridge/Bridge";
import classes from "./Admin.module.css";
import AdminOrdersTable from "../../components/AdminOrdersTable/AdminOrdersTable";
import getOrdersData from "../../Api/getOrdersData";

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
    });
  };

  //fetching data from firebase
  const lastVisible = useRef(new Map());
  const currentPage = useRef(0);
  const totalPages = useRef(null);
  const limitPerPage = 2;
  const [orders, setOrders] = useState([]);

  const findOrders = async () => {
    const ordersData = await getOrdersData(filterParams, limitPerPage);
    lastVisible.current.set(
      0,
      ordersData.docs[ordersData.docs.length - 1]
    );
    const orderList = ordersData?.docs?.map((doc) => {
      return { ...doc.data(), docId: doc.id };
    });
    setOrders(orderList);
  };

  const next = async() => {
    const cursor = lastVisible.current.get(currentPage.current);
    currentPage.current++;
    const ordersData = await getOrdersData(filterParams, limitPerPage, cursor);
    lastVisible.current.set(
      currentPage.current,
      ordersData.docs[ordersData.docs.length - 1]
    );
    const orderList = ordersData?.docs?.map((doc) => {
      return { ...doc.data(), docId: doc.id };
    });
    setOrders(orderList)
  }

  const prev = async() => {
    const cursor = lastVisible.current.get(currentPage.current - 2);
    currentPage.current = currentPage.current - 1;
    const ordersData = await getOrdersData(filterParams, limitPerPage, cursor);
    const orderList = ordersData?.docs?.map((doc) => {
      return { ...doc.data(), docId: doc.id };
    });
    setOrders(orderList)
  }
  

  return (
    <div className={classes.container}>
      <div className={classes.container__upper}>
        <h1 className={classes.title}>Управление заказами</h1>
        <OrderManagementFilters
          filterParams={filterParams}
          findOrders={() => findOrders(false)}
          dateHandler={dateHandler}
          dropdownHandler={dropdownHandler}
          clearHandler={clearHandler}
        />
      </div>
      <Bridge />
      <AdminOrdersTable orders={orders} isLoading={false} />
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Admin;
