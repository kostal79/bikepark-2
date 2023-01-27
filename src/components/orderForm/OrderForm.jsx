import React from "react";
import OrderList from "../OrderList/OrderList";
import OrderOptions from "../OrderOptions/OrderOptions";
import classes from "./OrderForm.module.css";
import { Formik, Form } from "formik";


const OrderForm = () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Заявка на аренду велосипедов</h1>
      <OrderOptions />
      <Formik
        initialValues={{
          helmet: [],
          flashlighter: [],
          locker: [],
        }}
        onSubmit={async (values) => {
          await sleep(500);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <OrderList />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
